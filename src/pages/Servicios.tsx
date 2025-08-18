import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { 
  Wrench, 
  Home, 
  Cpu, 
  Shield, 
  Clock,
  CheckCircle,
  Star,
  Target
} from 'lucide-react';

const Servicios = () => {
  const services = [
    {
      title: 'Reparación de Controles',
      description: 'Reparamos todos los tipos de controles gaming con garantía.',
      icon: <Wrench className="h-8 w-8" />,
      features: ['Drift de joysticks', 'Botones que no responden', 'Problemas de carga', 'Vibración'],
      price: 'Desde $30.000 COP',
      duration: '24-48 horas',
    },
    {
      title: 'Reparación de Consolas',
      description: 'Diagnóstico y reparación completa de todas las consolas.',
      icon: <Cpu className="h-8 w-8" />,
      features: ['PlayStation 3/4/5', 'Xbox One/Series', 'Nintendo Switch', 'Consolas retro'],
      price: 'Desde $80.000 COP',
      duration: '2-5 días',
    },
    {
      title: 'Instalación de Chips',
      description: 'Modificaciones profesionales con garantía extendida.',
      icon: <Shield className="h-8 w-8" />,
      features: ['Chips de región', 'Modificaciones homebrew', 'Actualización firmware', 'Instalación segura'],
      price: 'Desde $150.000 COP',
      duration: '1-3 días',
    },
    {
      title: 'Servicio a Domicilio',
      description: 'Llevamos nuestro servicio técnico hasta tu hogar.',
      icon: <Home className="h-8 w-8" />,
      features: ['Diagnóstico en casa', 'Reparaciones menores', 'Mantenimiento preventivo', 'Zona metropolitana'],
      price: 'Desde $50.000 COP',
      duration: 'Inmediato',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
              🔧 Servicios Técnicos
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-glow">
              Servicios Técnicos Gaming
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Reparaciones profesionales con garantía, diagnóstico gratuito y servicio a domicilio en Envigado y área metropolitana.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="card-gaming border-primary/20 glow-hover">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/20 text-primary">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl text-neon">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span className="text-muted-foreground">Precio: </span>
                      <span className="font-semibold text-secondary">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{service.duration}</span>
                    </div>
                  </div>
                  
                  <Button variant="gaming" className="w-full">
                    Solicitar Servicio
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hazlo Tú Mismo Challenge */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-gaming border-secondary/30 overflow-hidden">
              <div className="bg-gradient-to-r from-secondary/20 to-primary/20 p-8">
                <div className="text-center space-y-6">
                  <Badge variant="secondary" className="bg-secondary/30 text-secondary border-secondary/50">
                    🎯 Misión Especial
                  </Badge>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-glow">
                    Desafío: Hazlo Tú Mismo
                  </h2>
                  
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    ¿Quieres aprender a reparar tus propias consolas? Acepta el desafío y conviértete en un maestro de la reparación con nuestros cursos especializados.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold">Misión 1</h3>
                      <p className="text-sm text-muted-foreground">Reparación de Joystick Drift</p>
                    </div>
                    
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 mx-auto rounded-full bg-secondary/20 flex items-center justify-center">
                        <Cpu className="h-6 w-6 text-secondary" />
                      </div>
                      <h3 className="font-semibold">Misión 2</h3>
                      <p className="text-sm text-muted-foreground">Consolas que no Encienden</p>
                    </div>
                    
                    <div className="text-center space-y-2">
                      <div className="w-12 h-12 mx-auto rounded-full bg-gaming-orange/20 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-gaming-orange" />
                      </div>
                      <h3 className="font-semibold">Misión 3</h3>
                      <p className="text-sm text-muted-foreground">Cambio de Pantalla Switch</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
                    <Button variant="gaming" size="lg">
                      <Target className="mr-2 h-5 w-5" />
                      Acepto el Desafío
                    </Button>
                    <Button variant="gaming-secondary" size="lg">
                      Ver Todas las Misiones
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-glow">
                Nuestra Garantía Aventurera
              </h2>
              <p className="text-lg text-muted-foreground">
                Respaldamos cada reparación con garantía completa y servicio post-venta
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="card-gaming border-primary/20 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">6 Meses de Garantía</h3>
                  <p className="text-sm text-muted-foreground">
                    Garantía completa en todas nuestras reparaciones por 6 meses
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gaming border-primary/20 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Star className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Diagnóstico Gratuito</h3>
                  <p className="text-sm text-muted-foreground">
                    Evaluación completa sin costo y presupuesto transparente
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gaming border-primary/20 text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gaming-orange/20 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-gaming-orange" />
                  </div>
                  <h3 className="font-semibold mb-2">Servicio Rápido</h3>
                  <p className="text-sm text-muted-foreground">
                    Tiempos de respuesta rápidos y comunicación constante
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Servicios;