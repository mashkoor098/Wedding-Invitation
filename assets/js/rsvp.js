/**
 * Islamic Royal Wedding Invitation — RSVP Form Handler (Universal Static + WhatsApp + PHP Support)
 */

document.addEventListener('DOMContentLoaded', () => {
  const rsvpForm = document.getElementById('wedding-rsvp-form');
  const submitBtn = document.getElementById('btn-submit-rsvp');
  const feedbackSuccess = document.getElementById('rsvp-feedback-success');
  const feedbackError = document.getElementById('rsvp-feedback-error');

  // Primary Host WhatsApp Number (India: +91 7378517681)
  const HOST_WHATSAPP = '917378517681';

  if (!rsvpForm) return;

  rsvpForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (feedbackSuccess) feedbackSuccess.style.display = 'none';
    if (feedbackError) feedbackError.style.display = 'none';

    // Button loading state
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>⏳ ${window.i18nDict?.rsvp_sending || 'Saving RSVP...'}</span>`;

    const formData = new FormData(rsvpForm);
    const guestName = (formData.get('name') || '').trim() || 'Honored Guest';
    const guestPhone = (formData.get('phone') || '').trim() || 'Not Provided';
    const guestEmail = (formData.get('email') || '').trim();
    const attendingVal = formData.get('attending') || 'yes';
    const guestCount = formData.get('guests_count') || '1';
    const mealVal = formData.get('meal_pref') || 'nonveg';
    const guestMessage = (formData.get('message') || '').trim();

    // Human-readable status mapping
    let attendingText = '✅ InshaAllah, Joyfully Attending! 🎉';
    if (attendingVal === 'maybe') attendingText = '⏳ Hoping to Attend (Maybe)';
    if (attendingVal === 'no') attendingText = '❌ Regretfully Decline';

    // Meal preference mapping
    let mealText = '🍗 Halal Gourmet & Continental';
    if (mealVal === 'veg') mealText = '🥗 Pure Vegetarian / Jain Cuisine';

    // Beautifully Structured WhatsApp Message
    let waText = `✨ *﷽* ✨\n`;
    waText += `💌 *DAWAT-E-NIKAH RSVP CONFIRMATION*\n`;
    waText += `━━━━━━━━━━━━━━━━━━━━━\n`;
    waText += `💍 *Ariba Patel & Faizan Deshmukh*\n`;
    waText += `📅 *Date:* Saturday, 30 October 2027\n`;
    waText += `📍 *Venue:* Patel Medical, Fatema Nagar, MIDC, Jalgaon\n`;
    waText += `━━━━━━━━━━━━━━━━━━━━━\n`;
    waText += `👤 *Guest Name:* ${guestName}\n`;
    waText += `📞 *Phone / WhatsApp:* ${guestPhone}\n`;
    if (guestEmail) {
      waText += `✉️ *Email:* ${guestEmail}\n`;
    }
    waText += `🎟️ *Status:* ${attendingText}\n`;
    waText += `👥 *Total Guests:* ${guestCount} Person(s)\n`;
    waText += `🍽️ *Dining Preference:* ${mealText}\n`;
    if (guestMessage) {
      waText += `🤲 *Warm Duas & Wishes:*\n"${guestMessage}"\n`;
    }
    waText += `━━━━━━━━━━━━━━━━━━━━━\n`;
    waText += `✨ _Sent from Royal Wedding Digital Card_`;

    const waUrl = `https://wa.me/${HOST_WHATSAPP}?text=${encodeURIComponent(waText)}`;

    try {
      // Save locally in browser
      try {
        const rsvps = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
        rsvps.push({
          name: guestName,
          phone: guestPhone,
          email: guestEmail,
          attending: attendingVal,
          guests: guestCount,
          meal: mealVal,
          message: guestMessage,
          date: new Date().toISOString()
        });
        localStorage.setItem('wedding_rsvps', JSON.stringify(rsvps));
      } catch (err) {
        console.warn('LocalStorage save skipped:', err);
      }

      // If on server with PHP api
      if (window.location.protocol.startsWith('http')) {
        try {
          await fetch('api/rsvp.php', {
            method: 'POST',
            body: formData
          });
        } catch (phpErr) {
          // Static hosting (Vercel) - ignore PHP endpoint 404
        }
      }

      // Show success feedback with WhatsApp direct action
      handleRsvpSuccess(guestName, waUrl);

      // Redirect / open WhatsApp immediately
      window.open(waUrl, '_blank');

    } catch (err) {
      console.warn('RSVP submission handling:', err);
      handleRsvpSuccess(guestName, waUrl);
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
    }
  });

  function handleRsvpSuccess(name, waUrl) {
    if (feedbackSuccess) {
      feedbackSuccess.innerHTML = `
        <div style="background: rgba(8, 28, 21, 0.85); border: 1.5px solid var(--gold-primary); border-radius: 14px; padding: 22px; text-align: center; margin-top: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
          <span style="font-size: 2.2rem; display: block; margin-bottom: 8px;">✨💌✨</span>
          <h4 style="font-size: 1.25rem; font-family: var(--font-title); color: var(--gold-bright); margin-bottom: 8px;">
            Shukriya, ${name}!
          </h4>
          <p style="font-size: 0.95rem; color: var(--ivory-cream); line-height: 1.5; margin-bottom: 16px;">
            Aapka RSVP save ho chuka hai aur WhatsApp message create ho gaya hai.
          </p>
          <a href="${waUrl}" target="_blank" rel="noopener noreferrer" class="btn-royal-primary" style="display: inline-flex; align-items: center; justify-content: center; gap: 8px; font-size: 0.95rem; padding: 12px 24px; text-decoration: none; border-radius: 50px; background: linear-gradient(135deg, #25D366, #128C7E); color: #fff; border: 1px solid rgba(255,255,255,0.3); font-weight: 600;">
            <span>💬</span> Send RSVP to Host via WhatsApp (7378517681)
          </a>
        </div>
      `;
      feedbackSuccess.style.display = 'block';
      feedbackSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    rsvpForm.reset();
    if (typeof showRoyalToast === 'function') {
      showRoyalToast(`Thank you, ${name}! Your RSVP is confirmed! ❤️`);
    }
  }
});
