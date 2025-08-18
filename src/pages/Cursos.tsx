import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { 
  GraduationCap, 
  Star, 
  Clock,
  Users,
  Award,
  PlayCircle,
  CheckCircle,
  Target
} from 'lucide-react';

const Cursos = () => {
  const courses = [
    {
      title: 'Reparación de Joysticks',
      description: 'Aprende a diagnosticar y reparar controles de PlayStation, Xbox y Nintendo con técnicas profesionales.',
      duration: '4 horas',
      level: 'Principiante',
      price: 150000,
      modules: 8,
      students: 250,
      rating: 4.9,
      features: [
        'Diagnóstico de fallas comunes',
        'Reemplazo de sticks analógicos', 
        'Reparación de botones',
        'Limpieza profesional',
        'Certificado de finalización'
      ],
      modalidad: 'Presencial y Online'
    },
    {
      title: 'Consolas que no Encienden',
      description: 'Domina el arte de revivir consolas aparentemente muertas. Desde fuentes hasta chips.',
      duration: '6 horas',
      level: 'Intermedio',
      price: 200000,
      modules: 12,
      students: 180,
      rating: 4.8,
      features: [
        'Diagnóstico de fuentes de poder',
        'Reparación de chips principales',
        'Soldadura de componentes',
        'Uso de multímetro',
        'Casos prácticos reales'
      ],
      modalidad: 'Presencial'
    },
    {
      title: 'Cambio de Pantallas Switch',
      description: 'Especialízate en el reemplazo de pantallas de Nintendo Switch con técnicas seguras.',
      duration: '3 horas',
      level: 'Intermedio',
      price: 120000,
      modules: 6,
      students: 320,
      rating: 4.9,
      features: [
        'Desmontaje seguro de Switch',
        'Instalación de pantallas LCD',
        'Calibración de touch',
        'Pruebas de funcionamiento',
        'Garantía de trabajo'
      ],
      modalidad: 'Presencial y Online'
    },
    {
      title: 'Instalación de Chips',
      description: 'Curso avanzado para instalación de modchips en diferentes consolas de forma profesional.',
      duration: '8 horas',
      level: 'Avanzado',
      price: 300000,
      modules: 15,
      students: 95,
      rating: 4.7,
      features: [
        'Técnicas de soldadura avanzada',
        'Instalación en PS4/PS5',
        'Chips para Xbox Series',
        'Software y firmware',
        'Aspectos legales'
      ],
      modalidad: 'Presencial'
    }
  ];

  const benefits = [
    {
      title: 'Instructores Expertos',
      description: 'Aprende de técnicos con más de 8 años de experiencia',
      icon: <Award className="h-6 w-6" />
    },
    {
      title: 'Práctica Real',
      description: 'Trabajarás con equipos reales desde el primer día',
      icon: <Target className="h-6 w-6" />
    },
    {
      title: 'Certificación',
      description: 'Recibe un certificado avalado al completar el curso',
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      title: 'Soporte Continuo',
      description: 'Acceso a nuestra comunidad y soporte post-curso',
      icon: <Users className="h-6 w-6" />
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              🎓 Academia Aventura Gamer
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-glow">
              Cursos Especializados
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conviértete en un maestro de la reparación gaming. Aprende con los mejores y domina las técnicas más avanzadas.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-gaming border-primary/20 text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    {benefit.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-glow">
              Elige Tu Especialización
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada curso está diseñado para llevarte del nivel básico al profesional en tu área de interés.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="card-gaming border-primary/20 overflow-hidden glow-hover group">
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="text-xl text-neon">{course.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {course.students} estudiantes
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-current text-yellow-500" />
                          {course.rating}
                        </div>
                      </div>
                    </div>
                    <Badge variant={course.level === 'Principiante' ? 'secondary' : course.level === 'Intermedio' ? 'default' : 'destructive'}>
                      {course.level}
                    </Badge>
                  </div>
                  
                  <CardDescription className="text-muted-foreground">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-medium text-sm">Lo que aprenderás:</h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div>
                      <div className="text-sm text-muted-foreground">Modalidad</div>
                      <div className="font-medium">{course.modalidad}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Precio</div>
                      <div className="text-2xl font-bold text-primary">{formatPrice(course.price)}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <Button variant="gaming" className="flex-1">
                      <PlayCircle className="mr-2 h-4 w-4" />
                      Inscribirse
                    </Button>
                    <Button variant="outline" size="sm">
                      <GraduationCap className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-glow">
              ¿Listo para Subir de Nivel?
            </h2>
            <p className="text-lg text-muted-foreground">
              Únete a nuestra comunidad de aventureros y comienza tu viaje hacia la maestría en reparación gaming.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <GraduationCap className="mr-2 h-5 w-5" />
                Ver Todos los Cursos
              </Button>
              <Button variant="gaming-secondary" size="lg">
                Hablar con un Asesor
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cursos;