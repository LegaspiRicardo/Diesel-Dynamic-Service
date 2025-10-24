// src/pages/Contacto.tsx
import { useState } from 'react';

export default function Contacto() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Aquí puedes integrar con un servicio como EmailJS, Formspree o tu backend
            // Por ahora, simularemos el envío y abriremos Gmail
            const subject = encodeURIComponent(`Contacto: ${formData.asunto || 'Solicitud de información'}`);
            const body = encodeURIComponent(
                `Nombre: ${formData.nombre}\n` +
                `Email: ${formData.email}\n` +
                `Teléfono: ${formData.telefono}\n` +
                `Asunto: ${formData.asunto}\n\n` +
                `Mensaje:\n${formData.mensaje}`
            );
            
            const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=dieselservice82@gmail.com&su=${subject}&body=${body}`;
            
            // Abrir Gmail en nueva pestaña
            window.open(gmailLink, '_blank');
            
            setSubmitStatus('success');
            setFormData({
                nombre: '',
                email: '',
                telefono: '',
                asunto: '',
                mensaje: ''
            });
            
        } catch (error) {
            setSubmitStatus('error');
            console.error('Error al enviar el formulario:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 ">
            {/* Header */}
            <section className="bg-red-800/90 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex items-center mb-6 w-11/12 mx-auto">
                        <svg
                            className="w-12 h-16 text-white mr-2 inline-block transform rotate-90"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M10 2 L18 18 H2 Z" />
                        </svg>
                        <h1 className="text-3xl md:text-4xl font-bold text-white uppercase">
                            Contáctanos
                        </h1>
                    </div>
                </div>
            </section>

            {/* Contenido Principal */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Columna Izquierda - Información de Contacto */}
                    <div className="space-y-8">
                        {/* Domicilio */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Domicilio</h3>
                            <div className="space-y-3">
                                <p className="text-lg text-gray-600">
                                    Calle: <span className="text-red-700 font-bold">Los Pinos #2300</span>
                                </p>
                                <p className="text-lg text-gray-600">
                                    Colonia: La Guadalupana
                                </p>
                                <p className="text-lg text-gray-600">
                                    San Pedro Tlaquepaque, Jalisco
                                </p>
                            </div>
                        </div>

                        {/* Medios de comunicación */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Medios de comunicación</h3>
                            <div className="space-y-3">
                                <p className="text-lg text-gray-600 flex items-center">
                                    Email: 
                                    <a 
                                        href="mailto:dieselservice82@gmail.com" 
                                        className="text-red-700 font-bold text-xl underline hover:text-red-800 transition-colors ml-2"
                                    >
                                        dieselservice82@gmail.com
                                    </a>
                                </p>
                                <p className="text-lg text-gray-600 flex items-center">
                                    Teléfono:
                                    <a
                                        href="tel:3326295248"
                                        className="text-red-700 font-bold text-xl hover:text-red-800 transition-colors ml-2"
                                    >
                                        33 2629 5248
                                    </a>
                                </p>
                                <p className="text-lg text-gray-600 flex items-center">
                                    WhatsApp:
                                    <a
                                        href="https://api.whatsapp.com/send?phone=523326295248"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-red-700 font-bold text-xl underline hover:text-red-800 transition-colors ml-2"
                                    >
                                        33 2629 5248
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Horario de atención */}
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-700">Horario de atención</h3>
                            <div className="space-y-2">
                                <p className="text-lg text-gray-600">
                                    <span className="font-semibold">Lunes a Viernes:</span> 9:00 AM - 6:00 PM
                                </p>
                                <p className="text-lg text-gray-600">
                                    <span className="font-semibold">Sábados:</span> 9:00 AM - 2:00 PM
                                </p>
                                <p className="text-lg text-gray-600">
                                    <span className="font-semibold">Domingos:</span> Cerrado
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha - Formulario */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">Envíanos un mensaje</h2>
                        
                        {submitStatus === 'success' && (
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                                ¡Mensaje creado con éxito! Se ha abierto tu aplicación de correo.
                            </div>
                        )}
                        
                        {submitStatus === 'error' && (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                                Error al enviar el mensaje. Por favor, intenta nuevamente.
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                                        Nombre completo *
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                                        placeholder="Tu nombre completo"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                                        placeholder="tu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                                        Teléfono
                                    </label>
                                    <input
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        value={formData.telefono}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                                        placeholder="33 1234 5678"
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">
                                        Asunto *
                                    </label>
                                    <select
                                        id="asunto"
                                        name="asunto"
                                        value={formData.asunto}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                                    >
                                        <option value="">Selecciona un asunto</option>
                                        <option value="Cotización de servicios">Cotización de servicios</option>
                                        <option value="Solicitud de información">Solicitud de información</option>
                                        <option value="Cita para servicio">Cita para servicio</option>
                                        <option value="Queja o sugerencia">Queja o sugerencia</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                                    Mensaje *
                                </label>
                                <textarea
                                    id="mensaje"
                                    name="mensaje"
                                    value={formData.mensaje}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-vertical"
                                    placeholder="Describe tu consulta o requerimiento..."
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-red-800 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                            </button>
                        </form>
                    </div>
                </div>

                {/* Mapa */}
                <div className="mt-12">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1867.509670556299!2d-103.3291793598709!3d20.58726774135173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b3738b72c8e5%3A0x95bc82c2792a168a!2sDIESEL%20DYNAMICS%20SERVICE!5e0!3m2!1ses!2smx!4v1761087065633!5m2!1ses!2smx" 
                        loading="lazy" 
                        className="w-full rounded-3xl h-96 border-0"
                        title="Ubicación de Diesel Dynamics Service"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}