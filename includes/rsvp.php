<section id="rsvp-section" class="section-wrapper" aria-label="RSVP Response">
    <div class="container">
        <div class="section-header">
            <span class="section-badge"><?= e(t('nav_rsvp')) ?></span>
            <h2 class="section-title gold-gradient-text"><?= e(t('rsvp_section_title')) ?></h2>
            <p class="section-subtitle"><?= e(t('rsvp_section_subtitle')) ?></p>
            <img src="assets/images/royal-divider.svg" alt="Royal Divider" class="royal-divider-img">
        </div>

        <div class="rsvp-form-container">
            <form id="wedding-rsvp-form" method="POST" action="api/rsvp.php">
                <!-- CSRF Token -->
                <input type="hidden" name="csrf_token" value="<?= e(csrf_token()) ?>">

                <!-- Full Name -->
                <div class="form-group">
                    <label for="rsvp-name" class="form-label"><?= e(t('rsvp_name')) ?></label>
                    <input type="text" id="rsvp-name" name="name" class="form-control" required placeholder="e.g. Vikramaditya Rathore">
                </div>

                <!-- Phone / WhatsApp Number -->
                <div class="form-group">
                    <label for="rsvp-phone" class="form-label"><?= e(t('rsvp_phone')) ?></label>
                    <input type="tel" id="rsvp-phone" name="phone" class="form-control" required placeholder="e.g. +91 98765 43210">
                </div>

                <!-- Email (Optional) -->
                <div class="form-group">
                    <label for="rsvp-email" class="form-label"><?= e(t('rsvp_email')) ?></label>
                    <input type="email" id="rsvp-email" name="email" class="form-control" placeholder="e.g. vikram@example.com">
                </div>

                <!-- Attendance Radio Selection -->
                <div class="form-group">
                    <label class="form-label"><?= e(t('rsvp_attending')) ?></label>
                    <div class="form-radio-group">
                        <label class="radio-pill-label">
                            <input type="radio" name="attending" value="yes" checked>
                            <span><?= e(t('rsvp_choice_yes')) ?></span>
                        </label>
                        <label class="radio-pill-label">
                            <input type="radio" name="attending" value="maybe">
                            <span><?= e(t('rsvp_choice_maybe')) ?></span>
                        </label>
                        <label class="radio-pill-label">
                            <input type="radio" name="attending" value="no">
                            <span><?= e(t('rsvp_choice_no')) ?></span>
                        </label>
                    </div>
                </div>

                <!-- Guest Count -->
                <div class="form-group">
                    <label for="rsvp-guests" class="form-label"><?= e(t('rsvp_guests_count')) ?></label>
                    <select id="rsvp-guests" name="guests_count" class="form-control">
                        <option value="1">1 Person</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="5">5+ Family Members</option>
                    </select>
                </div>

                <!-- Meal Preference -->
                <div class="form-group">
                    <label for="rsvp-meal" class="form-label"><?= e(t('rsvp_meal_pref')) ?></label>
                    <select id="rsvp-meal" name="meal_pref" class="form-control">
                        <option value="veg"><?= e(t('rsvp_meal_veg')) ?></option>
                        <option value="nonveg"><?= e(t('rsvp_meal_nonveg')) ?></option>
                    </select>
                </div>

                <!-- Wishes / Message -->
                <div class="form-group">
                    <label for="rsvp-message" class="form-label"><?= e(t('rsvp_message')) ?></label>
                    <textarea id="rsvp-message" name="message" class="form-control" rows="3" placeholder="Write your warm blessings for Aarav &amp; Anaya..."></textarea>
                </div>

                <!-- Submit Button -->
                <div style="text-align: center; margin-top: 30px;">
                    <button type="submit" id="btn-submit-rsvp" class="btn-royal-primary">
                        <span>💌</span>
                        <span><?= e(t('rsvp_submit_btn')) ?></span>
                    </button>
                </div>

                <!-- Feedback Messages -->
                <div id="rsvp-feedback-success" class="form-feedback success">
                    <h4 style="font-size: 1.15rem; margin-bottom: 4px;"><?= e(t('rsvp_success_title')) ?></h4>
                    <p style="font-size: 0.9rem;"><?= e(t('rsvp_success_msg')) ?></p>
                </div>
                <div id="rsvp-feedback-error" class="form-feedback error">
                    <p style="font-size: 0.9rem;"><?= e(t('rsvp_error_msg')) ?></p>
                </div>
            </form>
        </div>
    </div>
</section>
