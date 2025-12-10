(function(){'use strict';
const modalConfig = {
  id: 'cmimiyn3x0003stg4x9zflq1i',
  slug: 'modal',
  title: 'modal',
  subtitle: '',
  steps: [{"type":"choice","title":"Pergunta 1","options":[{"badge":null,"label":"Opção 1","value":"1"},{"badge":null,"label":"Opção 2","value":"2"}],"imageUrl":"","subtitle":""},{"type":"cta","title":"Pergunta 2","ctaText":"Continuar","description":"aaa"}],
  theme: {"card":{"background":"#ffffff"},"buttons":{"color":"#ffffff","background":"#2a2929"},"customCss":"","primaryColor":"#494949","activeStepColor":"#00ff04"}
};

window.DDMPADS_MODALS = window.DDMPADS_MODALS || {};

const StepsModal = {
  modal: null,
  currentStep: 0,
  scrollY: 0,
  isTransitioning: false,

  init: function() {
    const style = document.createElement('style');
    style.textContent = ".ddmp-modal-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 999999; display: none; align-items: center; justify-content: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; backdrop-filter: blur(4px); background: rgba(0, 0, 0, 0.8); } .ddmp-modal-modal * { box-sizing: border-box; } .ddmp-modal-modal .ddmp-modal-container { max-width: 450px; width: 90%; max-height: 90vh; overflow-y: auto; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3); } .ddmp-modal-modal .ddmp-step-image img { max-width: 100%; max-height: 200px; border-radius: 8px; object-fit: contain; } .ddmp-modal-modal .ddmp-choices { display: flex; flex-direction: column; gap: 10px; } .ddmp-modal-modal .ddmp-choice-btn { position: relative; color: #333; } .ddmp-modal-modal .ddmp-badge { position: absolute; right: 12px; top: 50%; transform: translateY(-50%); padding: 4px 10px; border-radius: 4px; font-size: 11px; font-weight: 700; } .ddmp-modal-modal .ddmp-badge-easy { background: #4caf50; color: #fff; } .ddmp-modal-modal .ddmp-badge-medium { background: #ff9800; color: #fff; } .ddmp-modal-modal .ddmp-badge-hard { background: #f44336; color: #fff; } .ddmp-modal-modal .ddmp-loader { text-align: center; padding: 40px 20px; } .ddmp-modal-modal .ddmp-spinner { border: 4px solid #f3f3f3; border-top: 4px solid #494949; border-radius: 50%; width: 50px; height: 50px; animation: ddmp-spin 1s linear infinite; margin: 0 auto 20px; } @keyframes ddmp-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } .ddmp-modal-modal .ddmp-btn-primary { background: #2a2929; color: #ffffff; border: none; padding: 14px 28px; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 700; width: 100%; } .ddmp-modal-modal .ddmp-modal-container{ background: #ffffff; border-radius: 20px; max-width: 600px; box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3); overflow: hidden; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;} .ddmp-modal-modal .ddmp-modal-header{ background: linear-gradient(135deg, #494949, #3a3a3a); padding: 30px 30px 24px; text-align: center; color: white;} .ddmp-modal-modal .modal-header-content{ max-width: 500px; margin: 0 auto;} .ddmp-modal-modal .modal-title{ margin: 0 0 16px 0; font-size: 28px; font-weight: 700; color: white;} .ddmp-modal-modal .step-progress{ width: 100%; height: 8px; background: rgba(255, 255, 255, 0.3); border-radius: 10px; overflow: hidden; margin-top: 16px;} .ddmp-modal-modal .step-progress-bar{ height: 100%; background: #00ff04; border-radius: 10px; transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1); width: 0%;} .ddmp-modal-modal .ddmp-modal-body{ padding: 40px 30px; min-height: 300px;} .ddmp-modal-modal .step-content{ animation: fadeSlideIn 0.4s ease-out;} .ddmp-modal-modal .step-title{ font-size: 26px; font-weight: 700; color: #333; margin: 0 0 16px 0; line-height: 1.3;} .ddmp-modal-modal .step-subtitle{ font-size: 16px; color: #666; margin: 0 0 24px 0; line-height: 1.6;} .ddmp-modal-modal .step-description{ font-size: 16px; color: #666; margin: 0 0 32px 0; line-height: 1.6;} .ddmp-modal-modal .step-image{ width: 100%; max-width: 300px; height: auto; border-radius: 12px; margin-bottom: 24px; object-fit: cover;} .ddmp-modal-modal .ddmp-choices{ display: flex; flex-direction: column; gap: 12px; margin-top: 24px;} .ddmp-modal-modal .ddmp-choice-btn{ display: flex; align-items: center; justify-content: space-between; background: #2a2929 !important; color: #ffffff !important; border: none; padding: 16px 24px; border-radius: 12px; font-size: 16px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(42, 41, 41, 0.3); width: 100%; text-align: left;} .ddmp-modal-modal .ddmp-choice-btn:hover{ transform: translateY(-2px); box-shadow: 0 6px 16px rgba(42, 41, 41, 0.4);} .ddmp-modal-modal .ddmp-choice-btn:active{ transform: translateY(0);} .ddmp-modal-modal .ddmp-badge{ display: inline-block; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 700; text-transform: uppercase; margin-left: auto;} .ddmp-modal-modal .ddmp-badge-easy{ background: #38ef7d; color: #000;} .ddmp-modal-modal .ddmp-badge-hard{ background: #f45c43; color: #fff;} .ddmp-modal-modal .ddmp-badge-globo{ background: #021b79; color: #fff;} .ddmp-modal-modal .step-loader{ padding: 40px 20px;} .ddmp-modal-modal .loader-spinner{ width: 60px; height: 60px; border: 4px solid rgba(0, 0, 0, 0.1); border-top-color: #494949; border-radius: 50%; animation: spin 1s linear infinite; margin: 24px auto;} .ddmp-modal-modal .step-cta{ padding: 20px;} .ddmp-modal-modal .ddmp-btn-primary{ background: #2a2929 !important; color: #ffffff !important; border: none; padding: 16px 40px; border-radius: 12px; font-size: 18px; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(42, 41, 41, 0.4); width: 100%; max-width: 320px;} .ddmp-modal-modal .ddmp-btn-primary:hover{ transform: translateY(-2px); box-shadow: 0 6px 20px rgba(42, 41, 41, 0.5);} .ddmp-modal-modal .ddmp-btn-primary:active{ transform: translateY(0);} .ddmp-modal-modal .completion-wrapper{ padding: 40px 20px;} .ddmp-modal-modal .completion-icon{ font-size: 64px; margin-bottom: 24px; animation: bounceIn 0.6s ease-out;} .ddmp-modal-modal .completion-text{ font-size: 18px; color: #666; margin: 0 0 32px 0;} .ddmp-modal-modal .ddmp-choice-btn{ background: #2a2929 !important; color: #ffffff !important;} .ddmp-modal-modal .ddmp-btn-primary{ background: #2a2929 !important; color: #ffffff !important;} @keyframes fadeSlideIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } } @keyframes spin { to { transform: rotate(360deg); } } @keyframes bounceIn { 0% { transform: scale(0); opacity: 0; } 50% { transform: scale(1.1); } 100% { transform: scale(1); opacity: 1; } } @media (max-width: 768px) { .ddmp-modal-container { max-width: 95%; margin: 10px; } .ddmp-modal-header { padding: 24px 20px; } .modal-title { font-size: 24px; } .ddmp-modal-body { padding: 30px 20px; } .step-title { font-size: 22px; } .step-description, .step-subtitle { font-size: 15px; } .ddmp-btn-primary, .ddmp-choice-btn { font-size: 16px; padding: 14px 32px; } .step-image { max-width: 250px; } }";
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.className = 'ddmp-modal-' + modalConfig.slug;
    container.innerHTML = '<div class="ddmp-modal-container">      <div class=\"ddmp-modal-header\">        <div class=\"modal-header-content\">          <h1 class=\"modal-title\">modal</h1>          <p class=\"subtitle\"></p>          <div class=\"step-progress\">            <div class=\"step-progress-bar\"></div>          </div>        </div>      </div>      <div class=\"ddmp-modal-body\">        <div class=\"step-wrapper\">        </div>      </div>      </div>';

    this.modal = container;
    document.body.appendChild(container);
    
    this.renderStep(0);
  },

  renderStep: function(idx) {
    const body = this.modal.querySelector('.ddmp-modal-body');
    if (!body) return;

    const step = modalConfig.steps[idx];
    if (!step) return;

    let html = '';

    if (step.type === 'choice' && step.options) {
      const imageHtml = step.imageUrl 
        ? '<div class="ddmp-step-image"><img src="' + step.imageUrl + '" alt="' + (step.title || 'Step') + '" /></div>'
        : '';
      const subtitleHtml = step.subtitle 
        ? '<p class="ddmp-step-subtitle">' + step.subtitle + '</p>'
        : '';
      const optionsHtml = step.options.map(function(opt) {
        const badgeHtml = opt.badge 
          ? '<span class="ddmp-badge ddmp-badge-' + opt.badge.toLowerCase() + '">' + opt.badge + '</span>'
          : '';
        return '<button class="ddmp-choice-btn" data-value="' + opt.value + '">' + opt.label + badgeHtml + '</button>';
      }).join('');
      html = '<div class="step-choice">' + imageHtml + 
             '<div class="ddmp-step-title">' + step.title + '</div>' + 
             subtitleHtml + 
             '<div class="ddmp-choices">' + optionsHtml + '</div></div>';
    }
    else if (step.type === 'loader') {
      const imageHtml = step.imageUrl 
        ? '<div class="ddmp-step-image"><img src="' + step.imageUrl + '" alt="Loading" /></div>'
        : '';
      html = '<div class="step-loader">' + imageHtml + 
             '<div class="ddmp-loader">' +
               '<div class="ddmp-spinner"></div>' +
               '<p>' + (step.loaderText || step.text || 'Processing...') + '</p>' +
             '</div></div>';
    }
    else if (step.type === 'final' || step.type === 'cta') {
      const imageHtml = step.imageUrl 
        ? '<div class="ddmp-step-image"><img src="' + step.imageUrl + '" alt="CTA" /></div>'
        : '';
      html = '<div class="step-final">' + imageHtml + 
             '<div class="ddmp-step-title">' + (step.title || 'Ready!') + '</div>' +
             '<p class="ddmp-step-desc">' + (step.description || '') + '</p>' +
             '<button class="ddmp-btn-primary">' + (step.cta || step.ctaText || 'UNLOCK NOW') + '</button>' +
             '</div>';
    }

    body.innerHTML = html;
    this.setupEvents();
  },

  setupEvents: function() {
    const choiceBtns = this.modal.querySelectorAll('.ddmp-choice-btn');
    choiceBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        StepsModal.selectChoice(e.currentTarget.dataset.value);
      }, { once: true });
    });

    const primaryBtn = this.modal.querySelector('.ddmp-btn-primary');
    if (primaryBtn) {
      primaryBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (StepsModal.isTransitioning) return;
        if (StepsModal.currentStep === modalConfig.steps.length - 1) {
          StepsModal.complete();
        } else {
          StepsModal.nextStep();
        }
      }, { once: true });
    }
  },

  selectChoice: function(value) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    const btns = this.modal.querySelectorAll('.ddmp-choice-btn');
    btns.forEach(function(btn) {
      btn.classList.remove('selected');
      if (btn.dataset.value === value) btn.classList.add('selected');
    });

    setTimeout(function() {
      StepsModal.isTransitioning = false;
      StepsModal.nextStep();
    }, 500);
  },

  nextStep: function() {
    if (this.isTransitioning || this.currentStep >= modalConfig.steps.length - 1) return;
    
    this.isTransitioning = true;
    this.currentStep++;
    this.renderStep(this.currentStep);

    const currentStepData = modalConfig.steps[this.currentStep];
    if (currentStepData.type === 'loader') {
      setTimeout(function() {
        StepsModal.isTransitioning = false;
        StepsModal.nextStep();
      }, currentStepData.duration || 2000);
    } else {
      this.isTransitioning = false;
    }
  },

  blockScroll: function() {
    this.scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = '-' + this.scrollY + 'px';
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';
  },

  allowScroll: function() {
    const savedScrollY = this.scrollY || 0;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.overflow = '';
    window.scrollTo(0, savedScrollY);
  },

  close: function() {
    if (this.modal) {
      this.allowScroll();
      this.modal.remove();
      this.modal = null;
      this.currentStep = 0;
    }
  },

  complete: function() {
    this.close();
    if (window.ddmpAds && window.ddmpAds.showRewarded) {
      window.ddmpAds.showRewarded();
    }
  },

  show: function(config) {
    if (window.ddmpAds && window.ddmpAds.getCookie && window.ddmpAds.getCookie('rewarded_shown')) {
      return;
    }
    if (!this.modal) {
      this.init();
    }
    if (this.modal) {
      this.modal.style.display = 'flex';
    }
    this.blockScroll();
    if (config && config.onShow) config.onShow();
  }
};

window.DDMPADS_MODALS['modal'] = StepsModal;

if (window.DDMPADS_MODAL_LOADED) {
  window.DDMPADS_MODAL_LOADED('modal');
}
})();