import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { 
  ShoppingCart, 
  Star, 
  Package,
  Truck,
  CreditCard,
  Crown,
  Filter,
  Search,
  Grid,
  List
} from 'lucide-react';

const Tienda = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const products = [
    {
      id: 1,
      name: 'Joystick DualSense PS5',
      category: 'Controles',
      price: 280000,
      originalPrice: 320000,
      image: '/api/placeholder/300/300',
      rating: 4.8,
      reviews: 156,
      inStock: true,
      isOriginal: true,
      description: 'Control original Sony DualSense para PlayStation 5 con tecnología háptica avanzada.'
    },
    {
      id: 2,
      name: 'Sticks Analógicos PS4',
      category: 'Repuestos',
      price: 25000,
      originalPrice: 35000,
      image: '/api/placeholder/300/300',
      rating: 4.6,
      reviews: 89,
      inStock: true,
      isOriginal: true,
      description: 'Sticks analógicos originales para controles DualShock 4 de PlayStation 4.'
    },
    {
      id: 3,
      name: 'Pantalla Nintendo Switch',
      category: 'Repuestos',
      price: 180000,
      originalPrice: 220000,
      image: '/api/placeholder/300/300',
      rating: 4.9,
      reviews: 67,
      inStock: true,
      isOriginal: true,
      description: 'Pantalla LCD original de reemplazo para Nintendo Switch con touch funcional.'
    },
    {
      id: 4,
      name: 'Xbox Series X Console',
      category: 'Consolas',
      price: 2400000,
      originalPrice: 2800000,
      image: '/api/placeholder/300/300',
      rating: 4.9,
      reviews: 234,
      inStock: false,
      isOriginal: true,
      description: 'Consola Xbox Series X nueva, sellada con garantía oficial Microsoft.'
    },
    {
      id: 5,
      name: 'Botones Direccionales PS5',
      category: 'Repuestos',
      price: 15000,
      originalPrice: 20000,
      image: '/api/placeholder/300/300',
      rating: 4.5,
      reviews: 43,
      inStock: true,
      isOriginal: true,
      description: 'Set completo de botones direccionales originales para DualSense PS5.'
    },
    {
      id: 6,
      name: 'Joy-Con Nintendo Switch',
      category: 'Controles',
      price: 320000,
      originalPrice: 380000,
      image: '/api/placeholder/300/300',
      rating: 4.7,
      reviews: 112,
      inStock: true,
      isOriginal: true,
      description: 'Par de Joy-Con originales Nintendo en colores neón azul y rojo.'
    }
  ];

  const categories = ['Todos', 'Consolas', 'Controles', 'Repuestos', 'Accesorios'];

  const wholesaleFeatures = [
    'Precios especiales mayoristas',
    'Envíos gratuitos en pedidos >$200.000',
    'Acceso prioritario a nuevos productos',
    'Soporte técnico especializado',
    'Descuentos progresivos por volumen',
    'Facturación empresarial'
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const ProductCard = ({ product }: { product: typeof products[0] }) => (
    <Card className="card-gaming border-primary/20 overflow-hidden glow-hover group">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Badge variant="destructive">Agotado</Badge>
          </div>
        )}
        {product.isOriginal && (
          <Badge className="absolute top-2 left-2 bg-primary/90">Original</Badge>
        )}
        {product.originalPrice > product.price && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
          </Badge>
        )}
      </div>
      
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between">
          <Badge variant="secondary" className="text-xs">{product.category}</Badge>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-current text-yellow-500" />
            {product.rating}
            <span className="text-muted-foreground">({product.reviews})</span>
          </div>
        </div>
        <CardTitle className="text-lg text-neon">{product.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {product.description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="gaming" 
            className="flex-1" 
            disabled={!product.inStock}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            {product.inStock ? 'Agregar' : 'Agotado'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <WhatsAppFloat />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-background to-primary/10" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
              🛒 Tienda Gamer
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold text-glow">
              Repuestos & Consolas
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Encuentra repuestos originales, consolas y accesorios gaming de la más alta calidad. Precios mayoristas disponibles.
            </p>
          </div>
        </div>
      </section>

      {/* Wholesale Banner */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <Card className="card-gaming border-primary/30 overflow-hidden">
            <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <Badge className="bg-primary/30 text-primary border-primary/50">
                    <Crown className="mr-2 h-4 w-4" />
                    Suscripción Mayorista
                  </Badge>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-glow">
                    Acceso VIP a Precios Mayoristas
                  </h2>
                  
                  <p className="text-lg text-muted-foreground">
                    Únete a nuestro programa mayorista y obtén acceso exclusivo a precios especiales, 
                    envíos gratuitos y soporte prioritario.
                  </p>
                  
                  <div className="flex gap-4">
                    <Button variant="hero" size="lg">
                      <Crown className="mr-2 h-5 w-5" />
                      Suscribirse Ahora
                    </Button>
                    <Button variant="gaming-secondary" size="lg">
                      Más Información
                    </Button>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold mb-4">Beneficios Incluidos:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {wholesaleFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Filters and Controls */}
          <div className="flex flex-col lg:flex-row gap-4 mb-8 items-center justify-between">
            <Tabs defaultValue="Todos" className="w-full lg:w-auto">
              <TabsList className="grid w-full grid-cols-5 lg:w-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category} className="text-xs">
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
            
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1'
          }`}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Banner */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-gaming border-primary/20 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Envío Rápido</h3>
                <p className="text-sm text-muted-foreground">
                  Envíos a toda Colombia<br />
                  Entrega en 24-48 horas<br />
                  en Medellín y área metropolitana
                </p>
              </CardContent>
            </Card>

            <Card className="card-gaming border-primary/20 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Package className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Garantía Total</h3>
                <p className="text-sm text-muted-foreground">
                  Garantía en todos<br />
                  nuestros productos<br />
                  Devoluciones fáciles
                </p>
              </CardContent>
            </Card>

            <Card className="card-gaming border-primary/20 text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gaming-orange/20 flex items-center justify-center">
                  <CreditCard className="h-6 w-6 text-gaming-orange" />
                </div>
                <h3 className="font-semibold mb-2">Pago Seguro</h3>
                <p className="text-sm text-muted-foreground">
                  Múltiples métodos de pago<br />
                  Pagos seguros y protegidos<br />
                  Cuotas disponibles
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tienda;