// Componente del formulario de contacto optimizado para Gmail
import { useState } from "react";

export default function ContactForm() {
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
                    <div className="mt-3 text-sm flex">
                        <p className="mb-2">Si no se abre automáticamente da click en:</p>
                        <div className="flex gap-2 flex-wrap ml-4">
                            <button
                                onClick={openGmail}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm"
                            >
                                Abrir Gmail Ahora
                            </button>
                        </div>
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

                {/* Información específica para Gmail 
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex items-start">
                        <div className="bg-blue-100 p-2 rounded-lg mr-3">
                            <span className="text-blue-600 font-bold">Gmail</span>
                        </div>
                        <div>
                            <h4 className="font-semibold text-blue-800 mb-1">Optimizado para Gmail</h4>
                            <p className="text-sm text-blue-700">
                                Este formulario abrirá directamente Gmail web con tu mensaje pre-llenado.
                                Solo debes iniciar sesión y hacer clic en "Enviar".
                            </p>
                        </div>
                    </div>
                </div>*/}

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

            {/* Instrucciones de respaldo específicas para Gmail 
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">¿Problemas con Gmail?</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Asegúrate de estar logueado en Gmail en este navegador</li>
                    <li>• Permite ventanas emergentes para este sitio</li>
                    <li>• Si usas el botón "Copiar Datos", pégalos en el cuerpo de Gmail</li>
                    <li>• Destino: <strong>ddsperiferico@gmail.com</strong></li>
                </ul>
            </div>*/}
        </div>
    );
}