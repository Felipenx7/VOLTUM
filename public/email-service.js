// Email Service para VOLTUM
// Simula el envío de emails con registro local

class EmailService {
  constructor() {
    this.emails = [];
    this.loadEmails();
  }

  loadEmails() {
    this.emails = JSON.parse(localStorage.getItem('voltum_emails') || '[]');
  }

  saveEmails() {
    localStorage.setItem('voltum_emails', JSON.stringify(this.emails));
  }

  // Enviar email (simulado)
  async send(to, subject, type, data = {}) {
    const email = {
      id: Date.now(),
      to,
      subject,
      type,
      data,
      sentAt: new Date().toISOString(),
      status: 'sent',
      opened: false,
      clicked: false
    };

    this.emails.push(email);
    this.saveEmails();

    // Aquí iría integración real (SendGrid, Mailgun, etc.)
    console.log(`📧 Email enviado a ${to}: ${subject}`);
    
    return email;
  }

  // PLANTILLA 1: Confirmación de Registro
  sendWelcomeEmail(user) {
    const subject = `¡Bienvenido a VOLTUM, ${user.artist_name}!`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">⚡ VOLTUM</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Tu Preskit Profesional</p>
        </div>
        
        <div style="background: #f9fafb; padding: 40px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #1f2937;">¡Bienvenido, ${user.artist_name}!</h2>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Nos emociona tenerte en VOLTUM. Tu preskit profesional está listo para ser configurado.
          </p>

          <div style="background: white; border: 2px solid #e5e7eb; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #a855f7; margin-top: 0;">Próximos pasos:</h3>
            <ol style="color: #4b5563;">
              <li>Accede a tu dashboard</li>
              <li>Sube tu foto profesional</li>
              <li>Completa tu bio y redes sociales</li>
              <li>Selecciona tu equipamiento Pioneer</li>
              <li>Publica tus primeros eventos</li>
            </ol>
          </div>

          <div style="text-align: center;">
            <a href="https://voltum.cl/dashboard.html" style="display: inline-block; background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); color: white; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: bold;">
              → Ir a Mi Dashboard
            </a>
          </div>

          <p style="color: #9ca3af; font-size: 12px; margin-top: 30px; text-align: center;">
            Si tienes preguntas, contáctanos en Gerencia@voltum.cl
          </p>
        </div>
      </div>
    `;

    return this.send(user.email, subject, 'welcome', { user, html });
  }

  // PLANTILLA 2: Confirmación de Pago
  sendPaymentConfirmation(user) {
    const subject = `✅ Pago Confirmado - Tu Suscripción PRO está Activa`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">✅ PAGO EXITOSO</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Tu suscripción PRO está activa</p>
        </div>
        
        <div style="background: #f9fafb; padding: 40px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #1f2937;">¡Gracias por tu confianza!</h2>
          
          <div style="background: white; border-left: 4px solid #10b981; padding: 20px; margin: 20px 0; border-radius: 4px;">
            <h3 style="color: #1f2937; margin-top: 0;">Detalles de tu suscripción:</h3>
            <table style="width: 100%; color: #4b5563; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0;"><strong>Plan:</strong></td>
                <td style="text-align: right;">PRO</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Precio Mensual:</strong></td>
                <td style="text-align: right;">$10.000 CLP</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Próxima Renovación:</strong></td>
                <td style="text-align: right;">En 30 días</td>
              </tr>
              <tr>
                <td style="padding: 8px 0;"><strong>Estado:</strong></td>
                <td style="text-align: right;"><span style="color: #10b981; font-weight: bold;">✅ Activo</span></td>
              </tr>
            </table>
          </div>

          <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; border-radius: 4px;">
            <p style="color: #92400e; margin: 0; font-size: 13px;">
              <strong>Recuerda:</strong> Puedes cancelar tu suscripción cuando quieras desde tu dashboard, sin penalizaciones.
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="https://voltum.cl/dashboard.html" style="display: inline-block; background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); color: white; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: bold;">
              → Acceder a tu Preskit
            </a>
          </div>

          <p style="color: #9ca3af; font-size: 12px; margin-top: 30px; text-align: center;">
            Soporte: Gerencia@voltum.cl | WhatsApp: +56 9 3039 4883
          </p>
        </div>
      </div>
    `;

    return this.send(user.email, subject, 'payment_confirmation', { user, html });
  }

  // PLANTILLA 3: Recordatorio Renovación (7 días antes)
  sendRenewalReminder7Days(user) {
    const subject = `📅 Tu suscripción VOLTUM se renueva en 7 días`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">📅 RECORDATORIO DE RENOVACIÓN</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">En 7 días se renovará tu suscripción</p>
        </div>
        
        <div style="background: #f9fafb; padding: 40px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #1f2937;">Hola ${user.artist_name},</h2>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Tu suscripción PRO de VOLTUM se renovará automáticamente en <strong>7 días</strong>.
          </p>

          <div style="background: white; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0; border-radius: 4px;">
            <p style="color: #4b5563; margin: 0 0 10px 0;">
              <strong>Datos de renovación:</strong>
            </p>
            <ul style="color: #4b5563; margin: 10px 0; padding-left: 20px;">
              <li>Monto: $10.000 CLP</li>
              <li>Frecuencia: Mensual</li>
              <li>Próxima fecha: Automática</li>
            </ul>
          </div>

          <p style="color: #4b5563; line-height: 1.6;">
            Si deseas <strong>cambiar tu método de pago</strong> o <strong>cancelar</strong>, accede a tu dashboard ahora.
          </p>

          <div style="text-align: center; margin-top: 30px;">
            <a href="https://voltum.cl/dashboard.html" style="display: inline-block; background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); color: white; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: bold; margin-right: 10px;">
              → Mi Dashboard
            </a>
          </div>

          <p style="color: #9ca3af; font-size: 12px; margin-top: 30px; text-align: center;">
            ¿Preguntas? Contáctanos: Gerencia@voltum.cl
          </p>
        </div>
      </div>
    `;

    return this.send(user.email, subject, 'renewal_7days', { user, html });
  }

  // PLANTILLA 4: Recordatorio Renovación (1 día antes)
  sendRenewalReminder1Day(user) {
    const subject = `⚠️ ÚLTIMO DÍA: Tu suscripción se renueva mañana`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">⚠️ ÚLTIMA NOTIFICACIÓN</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Tu suscripción se renueva MAÑANA</p>
        </div>
        
        <div style="background: #f9fafb; padding: 40px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #1f2937;">Hola ${user.artist_name},</h2>
          
          <p style="color: #4b5563; line-height: 1.6;">
            <strong>MAÑANA</strong> se renovará tu suscripción PRO de VOLTUM por $10.000 CLP.
          </p>

          <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0; border-radius: 4px;">
            <p style="color: #92400e; margin: 0; font-weight: bold;">
              ⚡ Este es tu último recordatorio. Si deseas cambiar algo, hazlo hoy mismo.
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="https://voltum.cl/dashboard.html" style="display: inline-block; background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); color: white; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: bold;">
              → Acceder Ahora
            </a>
          </div>

          <p style="color: #9ca3af; font-size: 12px; margin-top: 30px; text-align: center;">
            Soporte urgente: +56 9 3039 4883 (WhatsApp)
          </p>
        </div>
      </div>
    `;

    return this.send(user.email, subject, 'renewal_1day', { user, html });
  }

  // PLANTILLA 5: Renovación Exitosa
  sendRenewalSuccess(user) {
    const subject = `✅ Suscripción Renovada - Siguiente mes activo`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">✅ RENOVACIÓN EXITOSA</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Tu suscripción está activa por 30 días más</p>
        </div>
        
        <div style="background: #f9fafb; padding: 40px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #1f2937;">¡Listo, ${user.artist_name}!</h2>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Tu suscripción PRO se ha renovado automáticamente. Tienes acceso completo a VOLTUM por los próximos 30 días.
          </p>

          <div style="background: white; border: 2px solid #e5e7eb; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #10b981; margin-top: 0;">✅ Acceso Activo:</h3>
            <ul style="color: #4b5563;">
              <li>✓ Preskit profesional completo</li>
              <li>✓ Foto y galería de fotos</li>
              <li>✓ Equipamiento Pioneer visible</li>
              <li>✓ Gestión de eventos</li>
              <li>✓ Redes sociales integradas</li>
              <li>✓ Analytics en tiempo real</li>
            </ul>
          </div>

          <p style="color: #4b5563; line-height: 1.6;">
            Recuerda: Puedes cancelar tu suscripción en cualquier momento desde tu dashboard, sin cargos adicionales.
          </p>

          <div style="text-align: center; margin-top: 30px;">
            <a href="https://voltum.cl/dashboard.html" style="display: inline-block; background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); color: white; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: bold;">
              → Ir a Mi Preskit
            </a>
          </div>

          <p style="color: #9ca3af; font-size: 12px; margin-top: 30px; text-align: center;">
            ¡Gracias por tu confianza en VOLTUM!
          </p>
        </div>
      </div>
    `;

    return this.send(user.email, subject, 'renewal_success', { user, html });
  }

  // PLANTILLA 6: Newsletter Semanal
  sendWeeklyNewsletter(user) {
    const subject = `📬 [Semana ${new Date().getWeek()}] Tips para tu Preskit - VOLTUM`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">📬 NEWSLETTER VOLTUM</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Tips para mejorar tu Preskit</p>
        </div>
        
        <div style="background: #f9fafb; padding: 40px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #1f2937;">Hola ${user.artist_name},</h2>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Esta semana te traemos consejos para maximizar tu preskit y atraer más bookings.
          </p>

          <div style="background: white; border-left: 4px solid #a855f7; padding: 20px; margin: 20px 0; border-radius: 4px;">
            <h3 style="color: #a855f7; margin-top: 0;">💡 Tip de la Semana:</h3>
            <p style="color: #4b5563;">
              <strong>Actualiza tu galería regularmente.</strong> Los DJs que suben fotos nuevas cada 2 semanas reciben 3x más visitas en su preskit.
            </p>
          </div>

          <div style="background: white; border-left: 4px solid #ec4899; padding: 20px; margin: 20px 0; border-radius: 4px;">
            <h3 style="color: #ec4899; margin-top: 0;">📊 Tus Estadísticas:</h3>
            <ul style="color: #4b5563; margin: 10px 0; padding-left: 20px;">
              <li>Visitas este mes: 324</li>
              <li>Visitantes únicos: 156</li>
              <li>Clicks en redes: 48</li>
            </ul>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="https://voltum.cl/dashboard.html" style="display: inline-block; background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); color: white; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: bold;">
              → Ver Mi Dashboard
            </a>
          </div>

          <p style="color: #9ca3af; font-size: 12px; margin-top: 30px; text-align: center;">
            No quieres recibir más newsletters? <a href="#" style="color: #9ca3af; text-decoration: underline;">Desuscribirse</a>
          </p>
        </div>
      </div>
    `;

    return this.send(user.email, subject, 'newsletter', { user, html });
  }

  // PLANTILLA 7: Email de Reactivación
  sendReactivationEmail(user) {
    const subject = `😢 Te echamos de menos, ${user.artist_name}`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">😢 TE ECHAMOS DE MENOS</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Queremos ayudarte a volver</p>
        </div>
        
        <div style="background: #f9fafb; padding: 40px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #1f2937;">Hola ${user.artist_name},</h2>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Notamos que tu suscripción a VOLTUM fue cancelada hace poco. ¿Hay algo que no te gustó?
          </p>

          <div style="background: #fef2f2; border-left: 4px solid #ef4444; padding: 20px; margin: 20px 0; border-radius: 4px;">
            <p style="color: #7f1d1d; margin: 0;">
              <strong>Queremos escucharte.</strong> Si hay algo que podamos mejorar, contáctanos. Estamos comprometidos con tu éxito.
            </p>
          </div>

          <p style="color: #4b5563; line-height: 1.6;">
            <strong>Ofertas especiales para ti:</strong>
          </p>
          <ul style="color: #4b5563; margin: 10px 0; padding-left: 20px;">
            <li>✓ 50% descuento en tu próximo mes</li>
            <li>✓ Acceso a nuevas features premium</li>
            <li>✓ Soporte prioritario</li>
          </ul>

          <div style="text-align: center; margin-top: 30px;">
            <a href="https://voltum.cl/login.html" style="display: inline-block; background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); color: white; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: bold;">
              → Reactivar Ahora
            </a>
          </div>

          <p style="color: #9ca3af; font-size: 12px; margin-top: 30px; text-align: center;">
            Contáctanos: Gerencia@voltum.cl | +56 9 3039 4883
          </p>
        </div>
      </div>
    `;

    return this.send(user.email, subject, 'reactivation', { user, html });
  }

  // PLANTILLA 8: Onboarding - Tips
  sendOnboardingTips(user) {
    const subject = `📚 5 Tips para Maximizar tu Preskit`;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="color: white; margin: 0;">📚 GUÍA DE TIPS</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0;">Maximiza tu preskit en 5 pasos</p>
        </div>
        
        <div style="background: #f9fafb; padding: 40px; border-radius: 0 0 10px 10px;">
          <h2 style="color: #1f2937;">Bienvenido de nuevo, ${user.artist_name}!</h2>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Aquí te dejamos 5 tips para que saques el máximo provecho de tu preskit:
          </p>

          <div style="margin: 20px 0;">
            <div style="background: white; border-left: 4px solid #a855f7; padding: 15px; margin: 10px 0; border-radius: 4px;">
              <h3 style="color: #a855f7; margin: 0 0 5px 0;">1️⃣ Foto de Perfil Profesional</h3>
              <p style="color: #4b5563; margin: 5px 0 0 0; font-size: 13px;">Usa una foto clara, en HD, preferiblemente con iluminación profesional. Esto aumenta credibilidad un 80%.</p>
            </div>

            <div style="background: white; border-left: 4px solid #ec4899; padding: 15px; margin: 10px 0; border-radius: 4px;">
              <h3 style="color: #ec4899; margin: 0 0 5px 0;">2️⃣ Bio Completa y Honesta</h3>
              <p style="color: #4b5563; margin: 5px 0 0 0; font-size: 13px;">Describe tu género musical, años de experiencia y qué te hace único. Sé autenticidad siempre.</p>
            </div>

            <div style="background: white; border-left: 4px solid #10b981; padding: 15px; margin: 10px 0; border-radius: 4px;">
              <h3 style="color: #10b981; margin: 0 0 5px 0;">3️⃣ Galería Actualizada</h3>
              <p style="color: #4b5563; margin: 5px 0 0 0; font-size: 13px;">Sube fotos recientes de tus presentaciones. DJs con galerías actualizadas reciben 3x más consultas.</p>
            </div>

            <div style="background: white; border-left: 4px solid #3b82f6; padding: 15px; margin: 10px 0; border-radius: 4px;">
              <h3 style="color: #3b82f6; margin: 0 0 5px 0;">4️⃣ Equipamiento Visible</h3>
              <p style="color: #4b5563; margin: 5px 0 0 0; font-size: 13px;">Selecciona el equipamiento Pioneer que usas. Esto demuestra profesionalismo y habilidad técnica.</p>
            </div>

            <div style="background: white; border-left: 4px solid #f59e0b; padding: 15px; margin: 10px 0; border-radius: 4px;">
              <h3 style="color: #f59e0b; margin: 0 0 5px 0;">5️⃣ Eventos Publicados</h3>
              <p style="color: #4b5563; margin: 5px 0 0 0; font-size: 13px;">Mantén tu calendario actualizado. DJs con eventos próximos parecen más activos y profesionales.</p>
            </div>
          </div>

          <div style="text-align: center; margin-top: 30px;">
            <a href="https://voltum.cl/dashboard.html" style="display: inline-block; background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); color: white; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: bold;">
              → Aplicar Tips Ahora
            </a>
          </div>

          <p style="color: #9ca3af; font-size: 12px; margin-top: 30px; text-align: center;">
            ¿Preguntas? Responde a este email o escríbenos a Gerencia@voltum.cl
          </p>
        </div>
      </div>
    `;

    return this.send(user.email, subject, 'onboarding_tips', { user, html });
  }

  // Obtener historial de emails
  getEmailHistory(userEmail) {
    return this.emails.filter(e => e.to === userEmail);
  }

  // Dashboard de emails (admin)
  getEmailStats() {
    return {
      total: this.emails.length,
      sent: this.emails.filter(e => e.status === 'sent').length,
      opened: this.emails.filter(e => e.opened).length,
      clicked: this.emails.filter(e => e.clicked).length,
      byType: {
        welcome: this.emails.filter(e => e.type === 'welcome').length,
        payment: this.emails.filter(e => e.type === 'payment_confirmation').length,
        renewal: this.emails.filter(e => e.type.includes('renewal')).length,
        newsletter: this.emails.filter(e => e.type === 'newsletter').length
      }
    };
  }
}

// Instancia global
const emailService = new EmailService();
