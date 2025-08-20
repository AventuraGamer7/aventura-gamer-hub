import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { useNavigate } from 'react-router-dom';
import { Wrench, Home, Cpu, Shield, Clock, CheckCircle, Star, Target, Gamepad2, Zap, Lock, Settings, Flame, Monitor, HardDrive, Battery } from 'lucide-react';
const Servicios = () => {
  const navigate = useNavigate();
  const [isLoggedIn] = useState(false); // Mock authentication state

  const controlServices = [{
    title: 'Problemas de Botones',
    description: 'Botones que no funcionan o están duros',
    icon: <Gamepad2 className="h-6 w-6" />,
    compatible: ['Joy-Con', 'Xbox', 'DualSense'],
    price: '$25.000 COP',
    duration: '24h'
  }, {
    title: 'Puerto de Carga Dañado',
    description: 'Reparación o cambio de puerto USB-C',
    icon: <Battery className="h-6 w-6" />,
    compatible: ['Joy-Con', 'Xbox', 'DualSense'],
    price: '$35.000 COP',
    duration: '48h'
  }, {
    title: 'Carcasa Dañada',
    description: 'Cambio completo de carcasa',
    icon: <Shield className="h-6 w-6" />,
    compatible: ['Joy-Con', 'Xbox', 'DualSense'],
    price: '$40.000 COP',
    duration: '24h'
  }];
  const magneticAnalogService = {
    title: 'Cambio a Análogos Magnéticos',
    description: 'Tecnología Hall Effect - Sin drift para siempre',
    icon: <Target className="h-6 w-6" />,
    compatible: ['Xbox', 'DualSense'],
    price: '$120.000 COP',
    duration: '72h',
    featured: true
  };
  const consoleServices = [{
    title: 'Mantenimientos',
    description: 'Limpieza interna y cambio de pasta térmica',
    icon: <Settings className="h-6 w-6" />,
    price: '$60.000 COP',
    duration: '24h'
  }, {
    title: 'Cambios de Fuente',
    description: 'Reparación de fuente de alimentación',
    icon: <Zap className="h-6 w-6" />,
    price: '$90.000 COP',
    duration: '48h'
  }, {
    title: 'Consolas que no Encienden',
    description: 'Diagnóstico y reparación completa',
    icon: <Cpu className="h-6 w-6" />,
    price: '$80.000 COP',
    duration: '2-3 días'
  }, {
    title: 'Problemas de Lectura',
    description: 'Reparación de lector de discos',
    icon: <Monitor className="h-6 w-6" />,
    price: '$70.000 COP',
    duration: '48h'
  }, {
    title: 'Sobrecalentamiento',
    description: 'Limpieza y reparación del sistema de refrigeración',
    icon: <Flame className="h-6 w-6" />,
    price: '$65.000 COP',
    duration: '24h'
  }, {
    title: 'Cambio de Pantalla Switch',
    description: 'Pantalla LCD original Nintendo',
    icon: <Monitor className="h-6 w-6" />,
    price: '$150.000 COP',
    duration: '72h'
  }, {
    title: 'Reparación de Carga',
    description: 'Puerto USB-C y circuito de carga',
    icon: <Battery className="h-6 w-6" />,
    price: '$55.000 COP',
    duration: '48h'
  }, {
    title: 'Cambio de Disco Duro',
    description: 'Instalación de SSD hasta 2TB',
    icon: <HardDrive className="h-6 w-6" />,
    price: '$40.000 COP + disco',
    duration: '24h'
  }];
  const extraServices = [{
    title: 'Servicio a Domicilio',
    description: 'Llevamos nuestro servicio técnico hasta tu hogar',
    icon: <Home className="h-6 w-6" />,
    price: '+$20.000 COP',
    duration: 'Costo adicional',
    note: 'Disponible en Envigado y área metropolitana'
  }, {
    title: 'Servicio Express (<12h)',
    description: 'Atención inmediata con prioridad máxima',
    icon: <Zap className="h-6 w-6" />,
    price: '+50% recargo',
    duration: 'Menos de 12h',
    note: 'Sujeto a disponibilidad y tipo de reparación'
  }];
  const handleAcceptMission = (serviceTitle: string) => {
    navigate('/cursos', {
      state: {
        missionTitle: serviceTitle
      }
    });
  };
  return <div className="min-h-screen bg-background">
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

      {/* Misiones Disponibles */}
      {isLoggedIn && <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge variant="secondary" className="bg-secondary/30 text-secondary border-secondary/50 mb-4">
                🎯 Solo para Aventureros Registrados
              </Badge>
              <h2 className="text-3xl font-bold text-glow mb-4">Misiones Disponibles</h2>
              <p className="text-muted-foreground">Completa misiones y gana XP reparando tu propio equipo</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-gaming border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Misión: Drift Zero</h3>
                  <p className="text-sm text-muted-foreground mb-4">Instala análogos magnéticos</p>
                  <Badge className="bg-primary/20 text-primary">+500 XP</Badge>
                </CardContent>
              </Card>
              
              <Card className="card-gaming border-secondary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Flame className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Misión: Cool Master</h3>
                  <p className="text-sm text-muted-foreground mb-4">Soluciona sobrecalentamiento</p>
                  <Badge className="bg-secondary/20 text-secondary">+750 XP</Badge>
                </CardContent>
              </Card>
              
              <Card className="card-gaming border-gaming-orange/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gaming-orange/20 flex items-center justify-center">
                    <Monitor className="h-8 w-8 text-gaming-orange" />
                  </div>
                  <h3 className="font-semibold mb-2">Misión: Pixel Perfect</h3>
                  <p className="text-sm text-muted-foreground mb-4">Cambia pantalla de Switch</p>
                  <Badge className="bg-gaming-orange/20 text-gaming-orange">+1000 XP</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>}

      {/* Services Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-glow">Servicios Técnicos</h2>
            
            <Tabs defaultValue="controles" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="controles">Controles</TabsTrigger>
                <TabsTrigger value="consolas">Consolas</TabsTrigger>
                <TabsTrigger value="extras">Extras</TabsTrigger>
              </TabsList>
              
              <TabsContent value="controles" className="space-y-8">
                {/* Magnetic Analog Special Section */}
                <Card className="card-gaming border-gaming-orange/30 bg-gradient-to-r from-gaming-orange/10 to-primary/10">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-gaming-orange/20 text-gaming-orange">
                        {magneticAnalogService.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl text-neon">{magneticAnalogService.title}</CardTitle>
                          <Badge className="bg-gaming-orange/20 text-gaming-orange">ESPECIAL</Badge>
                        </div>
                        <CardDescription className="text-muted-foreground">
                          {magneticAnalogService.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {magneticAnalogService.compatible.map((device, idx) => <Badge key={idx} variant="outline" className="border-gaming-orange/30 text-gaming-orange">
                          {device}
                        </Badge>)}
                    </div>
                    
                    <div className="flex justify-between items-center text-sm">
                      <div>
                        <span className="text-muted-foreground">Precio: </span>
                        <span className="font-semibold text-gaming-orange">{magneticAnalogService.price}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{magneticAnalogService.duration}</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button variant="gaming" className="flex-1">
                        Solicitar Servicio
                      </Button>
                      <Button variant="gaming-secondary" className="flex-1" onClick={() => handleAcceptMission(magneticAnalogService.title)}>
                        <Target className="mr-2 h-4 w-4" />
                        Aceptar Misión
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Regular Control Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {controlServices.map((service, index) => <Card key={index} className="card-gaming border-primary/20 glow-hover">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/20 text-primary">
                            {service.icon}
                          </div>
                          <div>
                            <CardTitle className="text-lg">{service.title}</CardTitle>
                          </div>
                        </div>
                        <CardDescription className="text-muted-foreground mt-2">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="flex flex-wrap gap-1">
                          {service.compatible.map((device, idx) => <Badge key={idx} variant="outline" className="border-primary/30 text-primary text-xs">
                              {device}
                            </Badge>)}
                        </div>
                        
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
                        
                        <div className="flex gap-2">
                          <Button variant="gaming" size="sm" className="flex-1">
                            Solicitar
                          </Button>
                          <Button variant="gaming-secondary" size="sm" onClick={() => handleAcceptMission(service.title)}>
                            <Target className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>)}
                </div>
              </TabsContent>
              
              <TabsContent value="consolas" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {consoleServices.map((service, index) => <Card key={index} className="card-gaming border-primary/20 glow-hover">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/20 text-primary">
                            {service.icon}
                          </div>
                          <CardTitle className="text-lg">{service.title}</CardTitle>
                        </div>
                        <CardDescription className="text-muted-foreground mt-2">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
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
                        
                        <div className="flex gap-2">
                          <Button variant="gaming" size="sm" className="flex-1">
                            Solicitar
                          </Button>
                          <Button variant="gaming-secondary" size="sm" onClick={() => handleAcceptMission(service.title)}>
                            <Target className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>)}
                </div>
              </TabsContent>
              
              <TabsContent value="extras" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {extraServices.map((service, index) => <Card key={index} className="card-gaming border-secondary/20 glow-hover">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-lg bg-secondary/20 text-secondary">
                            {service.icon}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{service.title}</CardTitle>
                            <CardDescription className="text-muted-foreground mt-2">
                              {service.description}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center text-sm">
                          <div>
                            <span className="text-muted-foreground">Costo: </span>
                            <span className="font-semibold text-secondary">{service.price}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span className="text-muted-foreground">{service.duration}</span>
                          </div>
                        </div>
                        
                        {service.note && <p className="text-xs text-muted-foreground bg-muted/30 p-2 rounded">
                            {service.note}
                          </p>}
                        
                        <Button variant="gaming" className="w-full">
                          Solicitar Información
                        </Button>
                      </CardContent>
                    </Card>)}
                </div>
              </TabsContent>
            </Tabs>
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
                  <h3 className="font-semibold mb-2">Reparaciones garantizadas.</h3>
                  <p className="text-sm text-muted-foreground">Garantía completa en todas nuestras reparaciones.</p>
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
    </div>;
};
export default Servicios;