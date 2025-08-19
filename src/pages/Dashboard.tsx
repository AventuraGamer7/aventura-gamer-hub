import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { useProfile } from '@/hooks/useProfile';
import GamificationPanel from '@/components/GamificationPanel';
import AddProductForm from '@/components/AddProductForm';
import AddCourseForm from '@/components/AddCourseForm';
import AddServiceForm from '@/components/AddServiceForm';
import ManagementPanel from '@/components/ManagementPanel';
import { 
  LogOut, 
  User, 
  Trophy, 
  Star,
  ShoppingCart,
  Wrench,
  GraduationCap,
  Home
} from 'lucide-react';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const { profile, canCreateContent, isSuperadmin, isAdmin } = useProfile();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut();
      toast({
        title: "Sesión cerrada",
        description: "¡Hasta la próxima aventura!",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo cerrar la sesión",
        variant: "destructive"
      });
    }
  };

  const quickActions = [
    {
      title: 'Servicios Técnicos',
      description: 'Solicitar reparación',
      icon: <Wrench className="h-6 w-6" />,
      action: () => navigate('/servicios'),
      variant: 'gaming' as const
    },
    {
      title: 'Cursos',
      description: 'Ver cursos disponibles',
      icon: <GraduationCap className="h-6 w-6" />,
      action: () => navigate('/cursos'),
      variant: 'gaming-secondary' as const
    },
    {
      title: 'Tienda',
      description: 'Comprar repuestos',
      icon: <ShoppingCart className="h-6 w-6" />,
      action: () => navigate('/tienda'),
      variant: 'hero' as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                🎮 Dashboard
              </Badge>
              <h1 className="text-2xl font-bold text-glow">
                Panel de Aventurero
              </h1>
            </div>
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="border-border/50"
              >
                <Home className="mr-2 h-4 w-4" />
                Inicio
              </Button>
              <Button
                variant="destructive"
                onClick={handleLogout}
                className="bg-destructive/20 border-destructive/30 text-destructive hover:bg-destructive/30"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Cerrar Sesión
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Welcome Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Welcome Card */}
            <Card className="card-gaming border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-glow">
                      ¡Bienvenido, Aventurero!
                    </CardTitle>
                    <CardDescription className="space-y-1">
                      <div>{user?.email}</div>
                      {profile && (
                        <div className="flex items-center gap-2">
                           <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                             {profile.role === 'superadmin' ? 'Superadmin' :
                              profile.role === 'admin' ? 'Admin' :
                              profile.role === 'manager' || profile.role === 'employee' ? 'Manager' : 
                              'Cliente'}
                           </span>
                        </div>
                      )}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tu centro de control gaming. Desde aquí puedes acceder a todos nuestros servicios, 
                  cursos y la tienda de repuestos.
                </p>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickActions.map((action, index) => (
                <Card key={index} className="card-gaming border-primary/20 glow-hover cursor-pointer" onClick={action.action}>
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      {action.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-neon">{action.title}</h3>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                    <Button variant={action.variant} size="sm" className="w-full">
                      Acceder
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Management Panel - Role-based access */}
            {canCreateContent() && (
              <Card className="card-gaming border-secondary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-5 w-5 text-secondary" />
                    Panel de Gestión {isSuperadmin() ? '(Superadmin)' : isAdmin() ? '(Admin)' : ''}
                  </CardTitle>
                  <CardDescription>
                    {isSuperadmin() 
                      ? 'Acceso completo: crear, editar y eliminar contenido'
                      : 'Permisos limitados: crear y editar contenido (sin eliminación)'
                    }
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <AddProductForm />
                      <AddCourseForm />
                      <AddServiceForm />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                      <Button 
                        variant="outline" 
                        onClick={() => navigate('/tienda')}
                        className="w-full"
                      >
                        Ver Tienda
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => navigate('/cursos')}
                        className="w-full"
                      >
                        Ver Cursos
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => navigate('/servicios')}
                        className="w-full"
                      >
                        Ver Servicios
                      </Button>
                    </div>

                    {isSuperadmin() && (
                      <div className="pt-4 border-t border-border/20">
                        <p className="text-sm text-destructive mb-2 font-medium">
                          ⚠️ Opciones de Superadmin - Eliminar contenido
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Como superadmin, puedes eliminar productos, cursos y servicios desde los paneles de gestión a continuación.
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Management Panels */}
            {canCreateContent() && (
              <div className="space-y-6">
                <ManagementPanel type="products" />
                <ManagementPanel type="courses" />
                <ManagementPanel type="services" />
              </div>
            )}

            {/* Recent Activity */}
            <Card className="card-gaming border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-secondary" />
                  Actividad Reciente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
                    <Star className="h-4 w-4 text-primary" />
                    <span className="text-sm">¡Bienvenido a Aventura Gamer!</span>
                  </div>
                  <div className="text-center py-4">
                    <p className="text-muted-foreground text-sm">
                      Comienza tu aventura utilizando nuestros servicios para ganar puntos y subir de nivel.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gamification Panel */}
          <div className="space-y-6">
            <GamificationPanel />
            
            {/* Quick Stats */}
            <Card className="card-gaming border-secondary/20">
              <CardHeader>
                <CardTitle className="text-lg">Progreso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Servicios utilizados</span>
                  <span className="font-bold">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Cursos completados</span>
                  <span className="font-bold">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Compras realizadas</span>
                  <span className="font-bold">0</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;