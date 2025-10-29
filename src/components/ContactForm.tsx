// Componente principal que detecta dispositivo y muestra el formulario correspondiente
import { useState, useEffect } from "react";

// Hook para detectar si es móvil
function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkDevice = () => {
            const mobile = window.innerWidth < 768; // 768px es el breakpoint típico para móvil
            setIsMobile(mobile);
        };

        // Verificar al cargar
        checkDevice();

        // Verificar al cambiar tamaño de ventana
        window.addEventListener('resize', checkDevice);
        
        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    }, []);

    return isMobile;
}

// Formulario para MÓVIL (el que funciona con mailto)
function MobileContactForm() {
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
            // Crear el contenido del email
            const subject = `Asunto: ${formData.asunto || 'Solicitud de información'}`;
            const body = `
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Asunto: ${formData.asunto}

Mensaje:
${formData.mensaje}
            `.trim();

            // Crear enlace mailto estándar (más compatible)
            const mailtoLink = `mailto:ddsperiferico@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Intentar abrir el cliente de correo
            const mailWindow = window.open(mailtoLink, '_blank');
            
            // Si el navegador bloqueó la ventana emergente, mostrar instrucciones
            if (!mailWindow || mailWindow.closed || typeof mailWindow.closed === 'undefined') {
                setSubmitStatus('error');
                // Opcional: mostrar instrucciones al usuario
                alert('Por favor, copia esta información y envíala manualmente a: ddsperiferico@gmail.com');
            } else {
                setSubmitStatus('success');
                // Limpiar el formulario después de un tiempo
                setTimeout(() => {
                    setFormData({
                        nombre: '',
                        email: '',
                        telefono: '',
                        asunto: '',
                        mensaje: ''
                    });
                }, 2000);
            }

        } catch (error) {
            setSubmitStatus('error');
            console.error('Error al enviar el formulario:', error);
            
            // Fallback: mostrar información para enviar manualmente
            const fallbackText = `
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Asunto: ${formData.asunto}
Mensaje: ${formData.mensaje}

Por favor, envía esta información manualmente a: ddsperiferico@gmail.com
            `;
            alert(fallbackText);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">


            <h3 className="text-2xl font-semibold mb-6 text-gray-700">Envíanos un mensaje</h3>

            {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    ✓ ¡Mensaje creado con éxito! Se ha abierto tu aplicación de correo.
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    ⚠ El navegador bloqueó la apertura automática del correo. Por favor, envía manualmente a: ddsperiferico@gmail.com
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label htmlFor="mobile-nombre" className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre completo *
                        </label>
                        <input
                            type="text"
                            id="mobile-nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                            placeholder="Tu nombre completo"
                        />
                    </div>

                    <div>
                        <label htmlFor="mobile-email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="mobile-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                            placeholder="tu@email.com"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <label htmlFor="mobile-telefono" className="block text-sm font-medium text-gray-700 mb-2">
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            id="mobile-telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                            placeholder="33 1234 5678"
                        />
                    </div>

                    <div>
                        <label htmlFor="mobile-asunto" className="block text-sm font-medium text-gray-700 mb-2">
                            Asunto *
                        </label>
                        <select
                            id="mobile-asunto"
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
                    <label htmlFor="mobile-mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje *
                    </label>
                    <textarea
                        id="mobile-mensaje"
                        name="mensaje"
                        value={formData.mensaje}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-vertical"
                        placeholder="Describe tu consulta o requerimiento..."
                    />
                </div>

                <div className="text-sm text-gray-600 mb-4">
                    * Al enviar este formulario, se abrirá tu aplicación de correo predeterminada con el mensaje preparado.
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-800 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? 'Preparando mensaje...' : 'Abrir aplicación de correo'}
                </button>
            </form>
        </div>
    );
}

// Formulario para ESCRITORIO (el que funciona con Gmail)
function DesktopContactForm() {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [gmailLink, setGmailLink] = useState('');

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
            // Crear el contenido específicamente para Gmail
            const subject = `${formData.asunto || 'Solicitud de información'} - ${formData.nombre}`;
            const body = `
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Asunto: ${formData.asunto}

Mensaje:
${formData.mensaje}

---
Enviado desde el formulario de contacto web
            `.trim();

            // ESTRATEGIA PRINCIPAL: Enlace directo a Gmail Web
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=ddsperiferico@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            setGmailLink(gmailUrl);

            // ESTRATEGIA 1: Abrir Gmail en nueva pestaña (funciona mejor que mailto)
            const newWindow = window.open(gmailUrl, '_blank', 'noopener,noreferrer');
            
            if (newWindow) {
                // Éxito - se abrió Gmail
                setSubmitStatus('success');
                
                // Limpiar después de éxito
                setTimeout(() => {
                    setFormData({
                        nombre: '',
                        email: '',
                        telefono: '',
                        asunto: '',
                        mensaje: ''
                    });
                }, 2000);
            } else {
                // Falló la apertura, intentar con mailto como respaldo
                throw new Error('Popup bloqueado');
            }

        } catch (error) {
            // ESTRATEGIA 2: Usar mailto como respaldo
            try {
                const subject = `Contacto: ${formData.asunto || 'Solicitud de información'} - ${formData.nombre}`;
                const body = `
Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Asunto: ${formData.asunto}

Mensaje:
${formData.mensaje}
                `.trim();

                const mailtoLink = `mailto:ddsperiferico@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                
                // Intentar con location.href
                window.location.href = mailtoLink;
                setSubmitStatus('success');
                
                setTimeout(() => {
                    setFormData({
                        nombre: '',
                        email: '',
                        telefono: '',
                        asunto: '',
                        mensaje: ''
                    });
                }, 2000);
                
            } catch (fallbackError) {
                // ESTRATEGIA 3: Mostrar datos para copiar y pegar
                setSubmitStatus('error');
                console.error('Error al enviar el formulario:', error);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    // Función específica para abrir Gmail
    const openGmail = () => {
        if (gmailLink) {
            window.open(gmailLink, '_blank', 'noopener,noreferrer');
        }
    };

    // Función para copiar los datos al portapapeles
    const copyToClipboard = () => {
        const text = `
Para: ddsperiferico@gmail.com
Asunto: Contacto: ${formData.asunto || 'Solicitud de información'} - ${formData.nombre}

Nombre: ${formData.nombre}
Email: ${formData.email}
Teléfono: ${formData.telefono}
Asunto: ${formData.asunto}

Mensaje:
${formData.mensaje}
        `.trim();

        navigator.clipboard.writeText(text).then(() => {
            alert('Datos copiados al portapapeles. Pégalos en tu correo de Gmail.');
        });
    };

    return (
        <div className="bg-white p-4 rounded-lg shadow-md">


            <h3 className="text-2xl font-semibold mb-6 text-gray-700">Envíanos un mensaje</h3>

            {submitStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                    <div className="flex items-center">
                        <span className="text-lg mr-2">✓</span>
                        <span>¡Perfecto! Se está abriendo Gmail con tu mensaje...</span>
                    </div>
                    <div className="mt-3 text-sm flex flex-col sm:flex-row sm:items-center gap-2">
                        <p>Si no se abre automáticamente da click en:</p>
                        <button
                            onClick={openGmail}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm whitespace-nowrap"
                        >
                            Abrir Gmail Ahora
                        </button>
                    </div>
                </div>
            )}

            {submitStatus === 'error' && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    <div className="flex items-center">
                        <span className="text-lg mr-2">⚠</span>
                        <span>El navegador bloqueó la apertura automática.</span>
                    </div>
                    <div className="mt-3 space-y-2">
                        <button
                            onClick={openGmail}
                            className="w-full bg-red-600 text-white px-4 py-3 rounded hover:bg-red-700 transition-colors font-semibold"
                        >
                            📧 Abrir Gmail Manualmente
                        </button>
                        <button
                            onClick={copyToClipboard}
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded hover:bg-blue-700 transition-colors font-semibold"
                        >
                            📋 Copiar Datos para Gmail
                        </button>
                    </div>
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="desktop-nombre" className="block text-sm font-medium text-gray-700 mb-2">
                            Nombre completo *
                        </label>
                        <input
                            type="text"
                            id="desktop-nombre"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                            placeholder="Tu nombre completo"
                        />
                    </div>

                    <div>
                        <label htmlFor="desktop-email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="desktop-email"
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
                        <label htmlFor="desktop-telefono" className="block text-sm font-medium text-gray-700 mb-2">
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            id="desktop-telefono"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                            placeholder="33 1234 5678"
                        />
                    </div>

                    <div>
                        <label htmlFor="desktop-asunto" className="block text-sm font-medium text-gray-700 mb-2">
                            Asunto *
                        </label>
                        <select
                            id="desktop-asunto"
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
                    <label htmlFor="desktop-mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                        Mensaje *
                    </label>
                    <textarea
                        id="desktop-mensaje"
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
                    className="w-full bg-red-800 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {isSubmitting ? (
                        <>
                            <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></span>
                            Preparando Gmail...
                        </>
                    ) : (
                        <>
                            <span className="mr-2"></span>
                            Enviar Gmail
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}

// Componente principal que elige el formulario correcto
export default function ContactForm() {
    const isMobile = useIsMobile();

    return (
        <div>
            {isMobile ? <MobileContactForm /> : <DesktopContactForm />}
            
        </div>
    );
}