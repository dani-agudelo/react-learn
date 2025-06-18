import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, MapPin, Calendar, Book, MessageSquare, Megaphone, HelpCircle, Plane, Menu, X, Bot, CloudSun, Route, Home, Church, Mountain, History, User, Mail, Sparkles, Pin, Cloud, Wind } from 'lucide-react';

// Define the main App component
const App = () => {
  // State for mobile navigation menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to manage the active section for navigation
  const [activeSection, setActiveSection] = useState('home'); // 'home', 'tourism', 'history', 'indibot', 'experiences', 'advertising', 'faq', 'traveltips'

  // Helper function to scroll to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false); // Close menu on navigation
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 font-inter text-stone-800">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-green-700 p-4 shadow-lg">
        <div className="container mx-auto flex items-center justify-between">
          <button onClick={() => scrollToSection('home')} className="flex items-center space-x-2 text-2xl font-bold text-white focus:outline-none">
            <Sparkles className="h-7 w-7 text-yellow-300" />
            <span>Arma, Un Tesoro por Descubrir</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <NavLink sectionId="tourism" label="Turismo" icon={<MapPin className="mr-1 h-5 w-5" />} onClick={scrollToSection} isActive={activeSection === 'tourism'} />
            <NavLink sectionId="history" label="Historia" icon={<Book className="mr-1 h-5 w-5" />} onClick={scrollToSection} isActive={activeSection === 'history'} />
            <NavLink sectionId="indibot" label="Indi-Bot" icon={<Bot className="mr-1 h-5 w-5" />} onClick={scrollToSection} isActive={activeSection === 'indibot'} />
            <NavLink sectionId="experiences" label="Experiencias" icon={<MessageSquare className="mr-1 h-5 w-5" />} onClick={scrollToSection} isActive={activeSection === 'experiences'} />
            <NavLink sectionId="advertising" label="Publicidad" icon={<Megaphone className="mr-1 h-5 w-5" />} onClick={scrollToSection} isActive={activeSection === 'advertising'} />
            <NavLink sectionId="faq" label="FAQ" icon={<HelpCircle className="mr-1 h-5 w-5" />} onClick={scrollToSection} isActive={activeSection === 'faq'} />
            <NavLink sectionId="traveltips" label="Consejos" icon={<Plane className="mr-1 h-5 w-5" />} onClick={scrollToSection} isActive={activeSection === 'traveltips'} />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 flex flex-col items-center">
            <NavLink sectionId="tourism" label="Turismo" icon={<MapPin className="mr-1 h-5 w-5" />} onClick={scrollToSection} isActive={activeSection === 'tourism'} />
            <NavLink sectionId="history" label="Historia" icon={<Book className="mr-1 h-5 w-5" />} onClick={scrollToSection} isActive={activeSection === 'history'} />
            <NavLink sectionId="indibot" label="Indi-Bot" icon={<Bot className="mr-1 h-5 w-5" />} onClick={scrollToSection} isActive={activeSection === 'indibot'} />
            <NavLink sectionId="experiences" label="Experiencias" icon={<MessageSquare className="mr-1 h-5 w-5" />} onClick={scrollToSection} isActive={activeSection === 'experiences'} />
            <NavLink sectionId="advertising" label="Publicidad" icon={<Megaphone className="mr-1 h-5 w-5" />} onClick={scrollToSection} isActive={activeSection === 'advertising'} />
            <NavLink sectionId="faq" label="FAQ" icon={<HelpCircle className="mr-1 h-5 w-5" />} onClick={scrollToSection} isActive={activeSection === 'faq'} />
            <NavLink sectionId="traveltips" label="Consejos" icon={<Plane className="mr-1 h-5 w-5" />} onClick={scrollToSection} isActive={activeSection === 'traveltips'} />
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Fuente_en_el_parque_de_Arma%2C_Caldas.jpg/500px-Fuente_en_el_parque_de_Arma%2C_Caldas.jpg?20190425005121"
            alt="Paisaje de Arma"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />
          <div className="relative z-10 p-4 bg-black bg-opacity-40 rounded-xl max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-up">
              Bienvenidos a Arma
            </h1>
            <p className="text-lg md:text-xl font-light leading-relaxed animate-fade-in-up delay-200">
              Un pueblo mágico donde la cultura, la naturaleza y la historia se entrelazan.
              Descubre sus encantos, sus tradiciones y la calidez de su gente.
            </p>
            <button
              onClick={() => scrollToSection('tourism')}
              className="mt-8 px-8 py-3 bg-amber-700 text-white font-semibold rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75"
            >
              Explora Arma
            </button>
          </div>
        </section>

        {/* Tourism Section */}
        <SectionContainer id="tourism" title="Descubre el Encanto de Arma" icon={<MapPin className="h-8 w-8 text-green-700" />}>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Religious View */}
            <ArticleCard title="Vista Religiosa" icon={<Church className="h-6 w-6 text-green-600" />}>
              <p>Sumérgete en la fe y la historia religiosa de Arma, visitando sus templos y conociendo sus tradiciones.</p>
              <div className="mt-4 space-y-4">
                <CollapsibleCard title="Promesa de San Antonio" imageUrl="https://placehold.co/600x400/22c55e/ffffff?text=San+Antonio" videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ">
                  <p>La promesa de San Antonio es una tradición arraigada en el corazón de Arma, un acto de fe y devoción que se manifiesta en diversas formas.</p>
                  <p className="mt-2">Recomendaciones: Visitar el santuario, participar en las procesiones, y observar los exvotos.</p>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <img src="https://placehold.co/300x200/22c55e/ffffff?text=Galeria+1" alt="Galeria 1" className="rounded-lg shadow-md" />
                    <img src="https://placehold.co/300x200/22c55e/ffffff?text=Galeria+2" alt="Galeria 2" className="rounded-lg shadow-md" />
                  </div>
                </CollapsibleCard>
                <CollapsibleCard title="Cumpleaños de Santiago de Arma" imageUrl="https://placehold.co/600x400/22c55e/ffffff?text=Santiago+de+Arma">
                  <p>El cumpleaños de Santiago de Arma es una celebración que honra la fundación de nuestro querido pueblo. Se realizan actividades culturales y recreativas para conmemorar este importante día.</p>
                  <p className="mt-2">Actividades: Desfiles, conciertos, ferias artesanales y gastronomía típica.</p>
                </CollapsibleCard>
                <CollapsibleCard title="Cristo de la Conquista y Jorge Robledo" imageUrl="https://placehold.co/600x400/22c55e/ffffff?text=Cristo+Robledo">
                  <p>El Cristo de la Conquista y la figura de Jorge Robledo son pilares de la historia de Arma, marcando momentos clave en su desarrollo.</p>
                  <p className="mt-2">Datos históricos: Descubre la conexión entre estos dos elementos y su impacto en la identidad del pueblo.</p>
                </CollapsibleCard>
                <CollapsibleCard title="Otras Iglesias e Ideologías Religiosas">
                  <p>Arma es un lugar de diversidad, y esto se refleja en la presencia de otras iglesias y expresiones de fe.</p>
                  <p className="mt-2">Ubicación y horarios: Consulta las direcciones y los horarios de culto de otros centros religiosos.</p>
                </CollapsibleCard>
              </div>
            </ArticleCard>

            {/* Nature View */}
            <ArticleCard title="Vista Natural" icon={<Mountain className="h-6 w-6 text-green-600" />}>
              <p>Déjate maravillar por la exuberante naturaleza que rodea Arma, desde sus ríos hasta sus miradores panorámicos.</p>
              <div className="mt-4 space-y-4">
                <CollapsibleCard title="Río de Arma" imageUrl="https://placehold.co/600x400/22c55e/ffffff?text=Rio+de+Arma">
                  <p>El Río de Arma, vital para la vida del pueblo, ofrece paisajes impresionantes y actividades al aire libre.</p>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <img src="https://placehold.co/300x200/22c55e/ffffff?text=Rio+1" alt="Río 1" className="rounded-lg shadow-md" />
                    <img src="https://placehold.co/300x200/22c55e/ffffff?text=Rio+2" alt="Río 2" className="rounded-lg shadow-md" />
                  </div>
                </CollapsibleCard>
                <CollapsibleCard title="Petroglifos del Dorado" imageUrl="https://placehold.co/600x400/22c55e/ffffff?text=Petroglifos">
                  <p>Los Petroglifos del Dorado son un testimonio ancestral de la rica historia prehispánica de la región.</p>
                </CollapsibleCard>
                <CollapsibleCard title="Miradores y Paisajes Cafeteros" imageUrl="https://placehold.co/600x400/22c55e/ffffff?text=Mirador">
                  <p>Disfruta de vistas panorámicas y sumérgete en la belleza de los paisajes cafeteros que caracterizan a Arma.</p>
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <img src="https://placehold.co/300x200/22c55e/ffffff?text=Cafe+1" alt="Café 1" className="rounded-lg shadow-md" />
                    <img src="https://placehold.co/300x200/22c55e/ffffff?text=Cafe+2" alt="Café 2" className="rounded-lg shadow-md" />
                  </div>
                </CollapsibleCard>
              </div>
            </ArticleCard>
          </div>

          {/* Calendar of Important Dates */}
          <ArticleCard title="Calendario de Fechas Importantes" icon={<Calendar className="h-6 w-6 text-green-600" />}>
            <CalendarComponent />
          </ArticleCard>

          {/* Interactive Map */}
          <ArticleCard title="Mapa Interactivo de Puntos Turísticos" icon={<Pin className="h-6 w-6 text-green-600" />}>
            <InteractiveMap />
          </ArticleCard>
        </SectionContainer>

        {/* History Section */}
        <SectionContainer id="history" title="Historia de Arma: Un Viaje en el Tiempo" icon={<History className="h-8 w-8 text-amber-800" />}>
          <ArticleCard title="Línea del Tiempo Interactiva" icon={<Book className="h-6 w-6 text-amber-700" />}>
            <TimelineComponent />
          </ArticleCard>
          <ArticleCard title="Celebridades del Pueblo" icon={<User className="h-6 w-6 text-amber-700" />}>
            <CelebritiesComponent />
          </ArticleCard>
        </SectionContainer>

        {/* Indi-Bot Section */}
        <SectionContainer id="indibot" title="Indi-Bot: Tu Guía Inteligente" icon={<Bot className="h-8 w-8 text-blue-600" />}>
          <IndiBotChat />
        </SectionContainer>

        {/* Experiences Section */}
        <SectionContainer id="experiences" title="Comparte tus Experiencias en Arma" icon={<MessageSquare className="h-8 w-8 text-purple-600" />}>
          <ArticleCard title="Comentarios de Turistas y Habitantes" icon={<User className="h-6 w-6 text-purple-500" />}>
            <TestimonialsComponent />
          </ArticleCard>
          <ArticleCard title="Envía tu Opinión" icon={<Mail className="h-6 w-6 text-purple-500" />}>
            <OpinionFormComponent />
          </ArticleCard>
        </SectionContainer>

        {/* Advertising Section */}
        <SectionContainer id="advertising" title="Apoya lo Nuestro: Emprendimientos y Actividades" icon={<Megaphone className="h-8 w-8 text-red-600" />}>
          <ArticleCard title="Promoción de Emprendimientos Locales" icon={<Sparkles className="h-6 w-6 text-red-500" />}>
            <LocalBusinessesComponent />
          </ArticleCard>
          <ArticleCard title="Anuncios de Actividades" icon={<Calendar className="h-6 w-6 text-red-500" />}>
            <AnnouncementsComponent />
          </ArticleCard>
        </SectionContainer>

        {/* FAQ Section */}
        <SectionContainer id="faq" title="Preguntas Frecuentes y Contacto" icon={<HelpCircle className="h-8 w-8 text-orange-600" />}>
          <ArticleCard title="Preguntas Frecuentes" icon={<HelpCircle className="h-6 w-6 text-orange-500" />}>
            <FAQListComponent />
          </ArticleCard>
          <ArticleCard title="Contáctanos" icon={<Mail className="h-6 w-6 text-orange-500" />}>
            <ContactFormComponent />
          </ArticleCard>
        </SectionContainer>

        {/* Travel Tips Section */}
        <SectionContainer id="traveltips" title="Consejos para tu Viaje a Arma" icon={<Plane className="h-8 w-8 text-blue-800" />}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ArticleCard title="Estado Actual de Vías" icon={<Route className="h-6 w-6 text-blue-700" />}>
              <RoadConditionsComponent />
            </ArticleCard>
            <ArticleCard title="Clima del Día" icon={<CloudSun className="h-6 w-6 text-blue-700" />}>
              <WeatherInfoComponent />
            </ArticleCard>
            <ArticleCard title="Consejos de Seguridad" icon={<Shield className="h-6 w-6 text-blue-700" />}>
              <SafetyTipsComponent />
            </ArticleCard>
          </div>
        </SectionContainer>
      </main>

      {/* Footer */}
      <footer className="bg-amber-800 text-white p-6 text-center shadow-inner mt-12">
        <div className="container mx-auto">
          <p className="text-lg font-semibold mb-2">Arma, Un Tesoro por Descubrir</p>
          <p className="text-sm">&copy; {new Date().getFullYear()} Todos los derechos reservados. Desarrollado con amor por la comunidad de Arma.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-green-200 transition-colors duration-200">Facebook</a>
            <a href="#" className="hover:text-green-200 transition-colors duration-200">Instagram</a>
            <a href="#" className="hover:text-green-200 transition-colors duration-200">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// --- Reusable Components ---

// Navigation Link Component
const NavLink = ({ sectionId, label, icon, onClick, isActive }) => (
  <button
    onClick={() => onClick(sectionId)}
    className={`flex items-center px-4 py-2 rounded-full transition-all duration-300 ${
      isActive ? 'bg-green-600 text-white shadow-md' : 'text-white hover:bg-green-600 hover:text-white'
    } focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75`}
  >
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

// Section Container Component
const SectionContainer = ({ id, title, icon, children }) => (
  <section id={id} className="py-16 md:py-20 bg-gradient-to-br from-stone-100 to-stone-200 shadow-inner mt-8 md:mt-12 rounded-lg mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <div className="inline-block p-3 bg-amber-100 rounded-full shadow-lg mb-4">
        {icon}
      </div>
      <h2 className="text-4xl font-extrabold text-green-800 mb-4">{title}</h2>
      <p className="text-xl text-stone-700 max-w-2xl mx-auto">
        Explora las maravillas que Arma tiene para ofrecerte.
      </p>
    </div>
    <div className="grid gap-12">{children}</div>
  </section>
);

// Article Card Component
const ArticleCard = ({ title, icon, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-stone-200">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-2xl font-bold text-amber-800 ml-3">{title}</h3>
    </div>
    <div className="text-stone-700 leading-relaxed">{children}</div>
  </div>
);

// Collapsible Card Component
const CollapsibleCard = ({ title, children, imageUrl, videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-green-200 rounded-lg overflow-hidden shadow-sm">
      <button
        className="flex justify-between items-center w-full p-4 bg-green-50 text-left text-green-800 font-semibold text-lg focus:outline-none hover:bg-green-100 transition-colors duration-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown className={`h-5 w-5 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-t border-green-200">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover rounded-lg mb-4 shadow-md"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/ccc/fff?text=Imagen+No+Disponible"; }} // Fallback
            />
          )}
          {videoUrl && (
            <div className="relative pt-[56.25%] mb-4 rounded-lg overflow-hidden shadow-md"> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
          {children}
        </div>
      )}
    </div>
  );
};

// Calendar Component
const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const events = {
    '2025-07-16': { name: 'Cumpleaños de Santiago de Arma', description: 'Celebración de la fundación del pueblo con desfiles y actividades culturales.' },
    '2025-08-24': { name: 'Fiestas de San Bartolomé', description: 'Fiestas patronales con música, danza y eventos religiosos.' },
    '2025-10-12': { name: 'Festival del Café', description: 'Celebración de la cosecha del café con catas, talleres y muestras.' },
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  // Helper to generate calendar days for a specific month/year
  const generateCalendarDays = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay(); // 0 for Sunday, 1 for Monday...
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    // Fill leading empty days
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Fill days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const dateString = date.toISOString().slice(0, 10); //YYYY-MM-DD
      days.push({ day: i, dateString, hasEvent: !!events[dateString] });
    }
    return days;
  };

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0-indexed

  const calendarDays = generateCalendarDays(currentYear, currentMonth);

  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1 bg-green-50 p-4 rounded-lg shadow-inner">
        <h4 className="text-xl font-semibold text-green-800 mb-4 text-center">Julio 2025</h4>
        <div className="grid grid-cols-7 gap-2 text-center text-sm font-medium text-green-700">
          {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
            <div key={day} className="py-2">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, index) => (
            <div key={index} className="relative">
              {day ? (
                <button
                  onClick={() => handleDateClick(day.dateString)}
                  className={`w-full py-2 rounded-lg text-lg font-bold transition-all duration-200
                    ${day.hasEvent ? 'bg-amber-600 text-white hover:bg-amber-700 shadow-md' : 'bg-white text-green-800 hover:bg-green-100'}
                    ${selectedDate === day.dateString ? 'ring-4 ring-green-500 ring-opacity-75' : ''} focus:outline-none`}
                  aria-label={`Seleccionar ${day.day} de Julio`}
                >
                  {day.day}
                </button>
              ) : (
                <div className="h-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 bg-green-50 p-4 rounded-lg shadow-inner">
        <h4 className="text-xl font-semibold text-green-800 mb-4 text-center">Detalles del Evento</h4>
        {selectedDate && events[selectedDate] ? (
          <div className="bg-white p-4 rounded-lg shadow-md border border-green-200">
            <h5 className="text-lg font-bold text-amber-800 mb-2">{events[selectedDate].name}</h5>
            <p className="text-stone-700">{events[selectedDate].description}</p>
            <p className="text-sm text-stone-500 mt-2">Fecha: {selectedDate}</p>
          </div>
        ) : (
          <p className="text-center text-stone-600">Selecciona una fecha en el calendario para ver los detalles del evento.</p>
        )}
      </div>
    </div>
  );
};

// Interactive Map Component (Modal Simulation)
const InteractiveMap = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState(null);

  const pointsOfInterest = [
    { id: 'church', name: 'Iglesia Matriz de San Bartolomé', lat: '5.62', lon: '-75.05', description: 'Principal templo religioso, de arquitectura colonial.' },
    { id: 'river', name: 'Río de Arma', lat: '5.60', lon: '-75.08', description: 'Zona natural para senderismo y disfrute del paisaje.' },
    { id: 'petroglyphs', name: 'Petroglifos del Dorado', lat: '5.65', lon: '-75.03', description: 'Sitio arqueológico con grabados rupestres ancestrales.' },
    { id: 'mirador', name: 'Mirador del Café', lat: '5.63', lon: '-75.06', description: 'Vistas panorámicas de los cafetales y el valle.' },
  ];

  const openModal = (point) => {
    setSelectedPoint(point);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPoint(null);
  };

  return (
    <div>
      <div className="relative w-full h-80 bg-stone-300 rounded-lg overflow-hidden shadow-md flex items-center justify-center">
        <img
          src="https://placehold.co/800x400/a78b4f/ffffff?text=Mapa+de+Arma"
          alt="Mapa de Arma con puntos turísticos"
          className="w-full h-full object-cover"
        />
        {/* Simulate clickable points */}
        {pointsOfInterest.map(point => (
          <button
            key={point.id}
            className="absolute p-2 bg-green-700 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
            style={{
              top: `${Math.random() * 70 + 10}%`, // Random positions for demo
              left: `${Math.random() * 70 + 10}%`,
            }}
            onClick={() => openModal(point)}
            aria-label={`Ver detalles de ${point.name}`}
          >
            <MapPin className="w-5 h-5" />
          </button>
        ))}
        <p className="absolute bottom-4 text-sm text-white bg-black bg-opacity-50 px-3 py-1 rounded-md">Haz clic en los íconos para ver los puntos de interés</p>
      </div>

      {showModal && selectedPoint && (
        <Modal onClose={closeModal}>
          <h3 className="text-2xl font-bold text-green-800 mb-4">{selectedPoint.name}</h3>
          <p className="text-stone-700 mb-2">{selectedPoint.description}</p>
          <p className="text-sm text-stone-600">Lat: {selectedPoint.lat}, Lon: {selectedPoint.lon}</p>
          <img
            src={`https://placehold.co/400x250/22c55e/ffffff?text=${selectedPoint.name.replace(/ /g, '+')}`}
            alt={selectedPoint.name}
            className="w-full h-40 object-cover rounded-lg mt-4 shadow-md"
          />
        </Modal>
      )}
    </div>
  );
};

// Generic Modal Component
const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-lg w-full relative">
        <button
          className="absolute top-3 right-3 text-stone-500 hover:text-stone-800 transition-colors duration-200 focus:outline-none"
          onClick={onClose}
          aria-label="Cerrar modal"
        >
          <X className="h-6 w-6" />
        </button>
        {children}
      </div>
    </div>
  );
};

// Timeline Component
const TimelineComponent = () => {
  const events = [
    { year: 1539, title: 'Primer Contacto Español', description: 'Llegada de Jorge Robledo a la región de los Quimbayas, marcando el inicio de la exploración española en la zona.' },
    { year: 1542, title: 'Fundación de Santiago de Arma', description: 'Fundación oficial de Santiago de Arma por el conquistador español Juan de Vadillo, estratégica por su ubicación cerca del río y las minas de oro.' },
    { year: 1600, title: 'Esplendor Minero', description: 'Período de auge de la minería del oro, atrayendo colonos y consolidando la importancia de Arma.' },
    { year: 1800, title: 'Transición Agrícola', description: 'Con el declive de la minería, la economía local se orienta hacia la agricultura, especialmente el café.' },
    { year: 1950, title: 'Desarrollo de Infraestructura', description: 'Construcción de vías y mejora de comunicaciones, integrando más a Arma con las regiones cercanas.' },
    { year: 2020, title: 'Impulso Turístico', description: 'Iniciativas recientes para promover el turismo cultural y natural, valorizando el patrimonio de Arma.' },
  ];

  return (
    <div className="relative border-l-4 border-green-700 pl-8 py-4">
      {events.map((event, index) => (
        <div key={index} className="mb-8 last:mb-0 relative group">
          <div className="absolute -left-10 top-0 mt-2 w-6 h-6 bg-green-700 rounded-full border-4 border-green-300 flex items-center justify-center">
            <span className="block w-2 h-2 bg-white rounded-full"></span>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform group-hover:scale-[1.01] border border-stone-200">
            <h4 className="text-xl font-bold text-amber-800 mb-2">{event.year}: {event.title}</h4>
            <p className="text-stone-700 leading-relaxed">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Celebrities Component
const CelebritiesComponent = () => {
  const celebrities = [
    { name: 'Toño Conejo', description: 'Un personaje folclórico y carismático, conocido por sus historias y anécdotas que forman parte del imaginario popular de Arma.', imageUrl: 'https://placehold.co/300x300/8B4513/FFF8DC?text=To%C3%B1o+Conejo' },
    { name: 'María C. Restrepo', description: 'Poetisa local cuyas obras capturan la esencia y el paisaje de Arma, celebrada por su contribución a la literatura regional.', imageUrl: 'https://placehold.co/300x300/8B4513/FFF8DC?text=Maria+C.' },
    { name: 'Carlos J. Giraldo', description: 'Historiador y cronista que dedicó su vida a documentar la rica historia de Arma, dejando un legado invaluable para futuras generaciones.', imageUrl: 'https://placehold.co/300x300/8B4513/FFF8DC?text=Carlos+J.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {celebrities.map((celeb, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-stone-200 text-center">
          <img
            src={celeb.imageUrl}
            alt={celeb.name}
            className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-amber-700 grayscale hover:grayscale-0 transition-all duration-300"
          />
          <h4 className="text-xl font-bold text-green-800 mb-2">{celeb.name}</h4>
          <p className="text-stone-700 text-sm">{celeb.description}</p>
        </div>
      ))}
    </div>
  );
};

// Indi-Bot Chat Component
const IndiBotChat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Scroll to bottom of chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const userMessage = { role: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      let chatHistory = [];
      messages.forEach(msg => {
        chatHistory.push({ role: msg.role === 'user' ? 'user' : 'model', parts: [{ text: msg.text }] });
      });
      chatHistory.push({ role: "user", parts: [{ text: input }] });

      const payload = { contents: chatHistory };
      const apiKey = ""; // Canvas will provide this at runtime
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const botText = result.candidates[0].content.parts[0].text;
        setMessages((prev) => [...prev, { role: 'bot', text: botText }]);
      } else {
        setMessages((prev) => [...prev, { role: 'bot', text: 'Lo siento, no pude entender tu pregunta. Por favor, intenta de nuevo.' }]);
      }
    } catch (error) {
      console.error('Error fetching from Gemini API:', error);
      setMessages((prev) => [...prev, { role: 'bot', text: 'Hubo un error al procesar tu solicitud. Por favor, intenta más tarde.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-xl border border-stone-200 max-w-2xl mx-auto">
      <div className="flex items-center mb-4">
        <Bot className="h-8 w-8 text-blue-600 mr-3" />
        <h3 className="text-2xl font-bold text-blue-800">Indi-Bot: Tu Asistente Personal de Arma</h3>
      </div>
      <div className="h-80 overflow-y-auto border border-blue-200 rounded-lg p-4 mb-4 bg-blue-50">
        {messages.length === 0 && (
          <p className="text-center text-stone-500 italic mt-10">Hola, soy Indi-Bot. Pregúntame sobre la historia o cultura de Arma!</p>
        )}
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
            <div className={`p-3 rounded-lg shadow-md max-w-[80%] ${
              msg.role === 'user' ? 'bg-green-700 text-white rounded-br-none' : 'bg-blue-100 text-stone-800 rounded-bl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start mb-3">
            <div className="p-3 rounded-lg shadow-md bg-blue-100 text-stone-800 rounded-bl-none">
              <div className="flex items-center">
                <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500 mr-2"></span>
                Escribiendo...
              </div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} /> {/* For auto-scrolling */}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Escribe tu pregunta sobre Arma..."
          className="flex-1 p-3 border border-blue-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <button
          onClick={handleSendMessage}
          disabled={isLoading}
          className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

// Testimonials Component
const TestimonialsComponent = () => {
  const testimonials = [
    { name: 'Ana M., Turista', comment: 'Arma me sorprendió con su historia y la amabilidad de su gente. ¡Un lugar para volver!', rating: 5 },
    { name: 'Juan C., Habitante', comment: 'Orgulloso de mi pueblo. Ver cómo Arma crece en turismo es emocionante.', rating: 5 },
    { name: 'Laura P., Viajera', comment: 'Los paisajes naturales son impresionantes. ¡Definitivamente un tesoro escondido!', rating: 4 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="bg-green-50 p-6 rounded-xl shadow-md border border-green-200">
          <div className="flex items-center mb-3">
            <User className="h-6 w-6 text-green-700 mr-2" />
            <h4 className="font-semibold text-green-800">{testimonial.name}</h4>
          </div>
          <p className="text-stone-700 italic mb-3">"{testimonial.comment}"</p>
          <div className="flex text-amber-500">
            {Array(testimonial.rating).fill().map((_, i) => <span key={i}>★</span>)}
            {Array(5 - testimonial.rating).fill().map((_, i) => <span key={i} className="text-stone-300">★</span>)}
          </div>
        </div>
      ))}
    </div>
  );
};

// Opinion Form Component
const OpinionFormComponent = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      return 'Todos los campos son obligatorios.';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Por favor, introduce un correo electrónico válido.';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setSubmissionStatus({ type: 'error', message: validationError });
      return;
    }

    // Simulate API call
    setTimeout(() => {
      console.log('Opinión enviada:', formData);
      setSubmissionStatus({ type: 'success', message: '¡Gracias por tu opinión! Será revisada para publicación.' });
      setFormData({ name: '', email: '', message: '' }); // Clear form
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
      <div className="mb-4">
        <label htmlFor="name" className="block text-stone-700 font-semibold mb-2">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-stone-700 font-semibold mb-2">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-stone-700 font-semibold mb-2">Tu Opinión:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-75"
      >
        Enviar Opinión
      </button>

      {submissionStatus && (
        <div className={`mt-4 p-4 rounded-lg text-center font-semibold ${
          submissionStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {submissionStatus.message}
        </div>
      )}
    </form>
  );
};

// Local Businesses Component
const LocalBusinessesComponent = () => {
  const businesses = [
    { name: 'Cafetería El Aroma', description: 'Café artesanal de la región, dulces y panadería fresca.', contact: 'Tel: 123-4567', imageUrl: 'https://placehold.co/400x250/a78b4f/ffffff?text=Cafeteria' },
    { name: 'Artesanías Ancestrales', description: 'Productos hechos a mano con técnicas tradicionales de la zona.', contact: 'Email: info@artesanias.com', imageUrl: 'https://placehold.co/400x250/a78b4f/ffffff?text=Artesanias' },
    { name: 'Restaurante Sabor Armeño', description: 'Platos típicos de la cocina local con ingredientes frescos.', contact: 'Dirección: Calle Principal #10-20', imageUrl: 'https://placehold.co/400x250/a78b4f/ffffff?text=Restaurante' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {businesses.map((biz, index) => (
        <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-stone-200 text-center">
          <img
            src={biz.imageUrl}
            alt={biz.name}
            className="w-full h-40 object-cover rounded-lg mb-4 shadow-sm"
          />
          <h4 className="text-xl font-bold text-red-800 mb-2">{biz.name}</h4>
          <p className="text-stone-700 text-sm mb-2">{biz.description}</p>
          <p className="text-sm text-stone-600">{biz.contact}</p>
        </div>
      ))}
    </div>
  );
};

// Announcements Component
const AnnouncementsComponent = () => {
  const announcements = [
    { title: 'Gran Feria Artesanal', date: '20 al 22 de Julio', description: 'Exposición y venta de artesanías locales.' },
    { title: 'Mercado Campesino Semanal', date: 'Todos los Sábados', description: 'Productos frescos del campo directamente a tu mesa.' },
    { title: 'Festival de Música Folclórica', date: '10 de Agosto', description: 'Presentaciones de grupos musicales tradicionales de la región.' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {announcements.map((announcement, index) => (
        <div key={index} className="bg-green-50 p-6 rounded-xl shadow-md border border-green-200">
          <h4 className="text-xl font-bold text-red-800 mb-2">{announcement.title}</h4>
          <p className="text-stone-700 mb-2">{announcement.description}</p>
          <p className="text-sm text-stone-600 font-semibold"><Calendar className="inline h-4 w-4 mr-1" /> {announcement.date}</p>
        </div>
      ))}
    </div>
  );
};

// FAQ List Component
const FAQListComponent = () => {
  const faqs = [
    { question: '¿Cuál es la mejor época para visitar Arma?', answer: 'La mejor época es durante la temporada seca (Diciembre a Febrero y Julio a Septiembre), cuando el clima es más agradable.' },
    { question: '¿Cómo llego a Arma?', answer: 'Se puede llegar en bus desde ciudades cercanas o en vehículo particular por la vía que conecta con la autopista principal.' },
    { question: '¿Hay opciones de alojamiento en el pueblo?', answer: 'Sí, Arma cuenta con pequeñas hosterías y fincas agroturísticas que ofrecen alojamiento.' },
    { question: '¿Qué actividades puedo realizar en la naturaleza?', answer: 'Puedes hacer senderismo, visitar miradores, recorrer cafetales y explorar el Río de Arma.' },
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <CollapsibleCard key={index} title={faq.question}>
          <p className="text-stone-700">{faq.answer}</p>
        </CollapsibleCard>
      ))}
    </div>
  );
};

// Contact Form Component
const ContactFormComponent = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'success', 'error', null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    if (!name || !email || !message) {
      return 'Todos los campos son obligatorios.';
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Por favor, introduce un correo electrónico válido.';
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setSubmissionStatus({ type: 'error', message: validationError });
      return;
    }

    // Simulate API call
    setTimeout(() => {
      console.log('Mensaje de contacto enviado:', formData);
      setSubmissionStatus({ type: 'success', message: '¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.' });
      setFormData({ name: '', email: '', message: '' }); // Clear form
    }, 1000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="contactName" className="block text-stone-700 font-semibold mb-2">Nombre:</label>
          <input
            type="text"
            id="contactName"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contactEmail" className="block text-stone-700 font-semibold mb-2">Correo Electrónico:</label>
          <input
            type="email"
            id="contactEmail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="contactMessage" className="block text-stone-700 font-semibold mb-2">Mensaje:</label>
          <textarea
            id="contactMessage"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75"
        >
          Enviar Mensaje
        </button>
        {submissionStatus && (
          <div className={`mt-4 p-4 rounded-lg text-center font-semibold ${
            submissionStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {submissionStatus.message}
          </div>
        )}
      </form>
      <div className="mt-8 pt-6 border-t border-stone-200">
        <h4 className="text-xl font-bold text-orange-800 mb-4">Información de Contacto de Entidades Turísticas</h4>
        <p className="text-stone-700 mb-2"><strong className="font-semibold">Oficina de Turismo Municipal:</strong> +57 310 123 4567</p>
        <p className="text-stone-700 mb-2"><strong className="font-semibold">Email:</strong> turismo.arma@email.com</p>
        <p className="text-stone-700"><strong className="font-semibold">Redes Sociales:</strong> @ArmaTurismoOficial</p>
      </div>
    </div>
  );
};

// Road Conditions Component
const RoadConditionsComponent = () => {
  const [status, setStatus] = useState('Cargando...');

  useEffect(() => {
    // Simulate fetching real-time data
    setTimeout(() => {
      setStatus('Vías en buen estado, sin novedades reportadas.');
    }, 1500);
  }, []);

  return (
    <div className="bg-green-50 p-6 rounded-xl shadow-md border border-green-200">
      <h4 className="text-xl font-bold text-blue-800 mb-2">Reporte de Vías</h4>
      <p className="text-stone-700">{status}</p>
      <p className="text-sm text-stone-600 mt-3">Última actualización: {new Date().toLocaleString('es-ES')}</p>
    </div>
  );
};

// Weather Info Component
const WeatherInfoComponent = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        setError(null);
        // Using OpenWeatherMap API with a placeholder API key and coordinates for a generic location
        const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with a real key or mock data
        const lat = '5.62'; // Latitude for a generic location (e.g., in Colombia)
        const lon = '-75.05'; // Longitude for a generic location
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;

        // Check if API key is provided, if not, use mock data
        if (apiKey === 'YOUR_OPENWEATHERMAP_API_KEY' || !apiKey) {
            setWeather({
              city: 'Arma (Simulado)',
              temp: '25°C',
              description: 'Mayormente soleado',
              icon: '01d', // Sunny icon
              humidity: '65%',
              wind: '10 km/h'
            });
            setLoading(false);
            return;
        }

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setWeather({
          city: data.name,
          temp: `${Math.round(data.main.temp)}°C`,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
          humidity: `${data.main.humidity}%`,
          wind: `${Math.round(data.wind.speed * 3.6)} km/h` // Convert m/s to km/h
        });
      } catch (e) {
        console.error("Error fetching weather:", e);
        setError("No se pudo cargar el clima. Inténtalo de nuevo más tarde.");
        // Fallback to mock data in case of fetch error
        setWeather({
            city: 'Arma (Simulado)',
            temp: '25°C',
            description: 'Mayormente soleado',
            icon: '01d',
            humidity: '65%',
            wind: '10 km/h'
          });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  if (loading) {
    return (
      <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200 text-center">
        <p className="text-stone-600">Cargando clima...</p>
        <div className="mt-2 animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 p-6 rounded-xl shadow-md border border-red-200 text-center text-red-700">
        <p>{error}</p>
        <p className="text-sm mt-2">Se está mostrando información simulada.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200 text-center">
      <h4 className="text-xl font-bold text-blue-800 mb-3">Clima en {weather.city}</h4>
      <div className="flex items-center justify-center mb-4">
        {weather.icon && (
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.description}
            className="w-20 h-20"
          />
        )}
        <div>
          <p className="text-5xl font-extrabold text-blue-700">{weather.temp}</p>
          <p className="text-lg text-stone-600 capitalize">{weather.description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm text-stone-700">
        <p className="flex items-center justify-center"><Cloud className="h-5 w-5 mr-1 text-blue-500" /> Humedad: {weather.humidity}</p>
        <p className="flex items-center justify-center"><Wind className="h-5 w-5 mr-1 text-blue-500" /> Viento: {weather.wind}</p>
      </div>
      <p className="text-xs text-stone-500 mt-4">Datos del Clima de OpenWeatherMap (Simulados si no hay API Key)</p>
    </div>
  );
};

// Dummy Shield icon as it's not in lucide-react (or needs to be imported, simple SVG fallback)
import PropTypes from 'prop-types';

const Shield = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

Shield.propTypes = {
  className: PropTypes.string,
};


// Safety Tips Component
const SafetyTipsComponent = () => {
  const tips = [
    'Mantente siempre en los senderos señalizados en zonas naturales.',
    'Informa a alguien sobre tu ruta y hora estimada de regreso si sales a explorar.',
    'Respeta la cultura local y las tradiciones de la comunidad.',
    'Cuida el medio ambiente: no dejes basura y evita ruidos excesivos.',
    'Ten precaución al conducir en vías rurales, pueden ser estrechas o sin pavimentar.',
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-stone-200">
      <h4 className="text-xl font-bold text-blue-800 mb-3">Consejos para tu Seguridad</h4>
      <ul className="list-disc list-inside space-y-2 text-stone-700">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};


// Main Tailwind CSS setup (within HTML for direct use)
const TailwindConfig = () => (
  <script src="https://cdn.tailwindcss.com"></script>
);

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
  body {
    font-family: 'Inter', sans-serif;
  }
  .animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
    opacity: 0;
  }
  .animate-fade-in-up.delay-200 {
    animation-delay: 0.2s;
  }
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Render the App component
export default function ArmaWebsite() {
  return (
    <>
      <TailwindConfig />
      <style>{style}</style>
      <App />
    </>
  );
}
