(function(){'use strict';
const modalConfig = {
  id: 'cmig6cf0m00012w5k43pvzohk',
  slug: 'escolha-sua-roupa-agora',
  title: 'escolha sua roupa agora',
  cards: [{"id":"card1","emoji":"","title":"Casual Chic","imageUrl":"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop","description":"Confortável e estiloso para o dia a dia"},{"id":"card2","emoji":"","title":"Formal Elegante","imageUrl":"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop","description":"Sofisticado para eventos especiais"},{"id":"card3","emoji":"","title":"Esportivo Moderno","imageUrl":"https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=400&h=500&fit=crop","description":"Perfeito para atividades e academia"},{"id":"card4","emoji":"","title":"Streetwear Urban","imageUrl":"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=500&fit=crop","description":"Estilo urbano e descolado"},{"id":"card5","emoji":"","title":"Boho Vintage","imageUrl":"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop","description":"Retrô e cheio de personalidade"},{"id":"card6","emoji":"","title":"Minimalista Clean","imageUrl":"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop","description":"Simples, clean e atemporal"}],
  leftAction: 'Não gosto',
  rightAction: 'Gosto',
  minSwipes: 4
};

window.DDMPADS_MODALS = window.DDMPADS_MODALS || {};

const SwipeModal = {
  modal: null,
  currentCardIndex: 0,
  leftCount: 0,
  rightCount: 0,
  scrollY: 0,
  dragState: { isDragging: false, startX: 0, startY: 0 },

  init: function() {
    const style = document.createElement('style');
    style.textContent = ".ddmp-modal-escolha-sua-roupa-agora { position: fixed; top: 0; left: 0; width: 100%; height: 100%; Backdrop-filter: Blur(12px); z-index: 999999; display: none; align-items: center; justify-content: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; } .ddmp-modal-escolha-sua-roupa-agora * { box-sizing: border-box; } .ddmp-modal-escolha-sua-roupa-agora .ddmp-modal-container { max-width: 450px; width: 90%; max-height: 90vh; overflow: hidden; } .ddmp-modal-escolha-sua-roupa-agora .ddmp-btn-primary { background: #6366f1; color: #fff; border: none; padding: 16px 40px; border-radius: 30px; cursor: pointer; font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); } .ddmp-modal-escolha-sua-roupa-agora .ddmp-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3); } .swipe-header {background: linear-gradient(135deg, #4881ec 0%, #8b5cf6 100%);padding: 24px 24px;text-align: center;color: white;border-radius: 18px 18px 0 0}.swipe-header h1 {margin: 0 0 24px 0;font-size: 28px;font-weight: 800;letter-spacing: -0.5px}.swipe-counter {display: flex;justify-content: center;gap: 48px;font-size: 16px;font-weight: 600}.swipe-counter>span {display: flex;align-items: center;gap: 8px;background: rgba(255, 255, 255, 0.2);padding: 8px 16px;border-radius: 50px;backdrop-filter: blur(10px)}.counter-icon {font-size: 20px}.counter-value {font-size: 18px;min-width: 20px;text-align: center}.ddmp-modal-body {padding: 24px;background: #ececec;border-radius: 0 0 24px 24px;align-items: center;text-align: center;justify-content: center;}.swipe-instruction {text-align: center;margin-bottom: 16px;justify-content: center;}.swipe-actions {display: flex;justify-content: center;gap: 16px;}.swipe-btn {border-radius: 8px;border: none;font-size: 32px;cursor: pointer;transition: transform 0.2s ease;padding: 16px 32px;}.swipe-btn-left {background: #f44336;color: white;}.swipe-btn-right {background: #4caf50;color: white;}.swipe-instruction p {margin: 0;font-size: 14px;color: #3a3e45;font-weight: 500}.swipe-stack {position: relative;width: 100%;height: 440px;margin: 0 0 32px 0}.swipe-card {position: absolute;width: 100%;height: 100%;background: rgb(255, 255, 255);border-radius: 24px;box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);display: flex;flex-direction: column;overflow: hidden;transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s ease;cursor: grab;user-select: none}.swipe-card-image {width: 100%;height: 70%;object-fit: cover;background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%)}.swipe-card-content {padding: 24px;text-align: center;flex: 1;display: flex;flex-direction: column;justify-content: center;background: white}.swipe-card-emoji {font-size: 48px;margin-bottom: 12px}.swipe-card-title {font-size: 22px;font-weight: 700;color: #333;margin: 0 0 8px 0; text-align: center;}.swipe-card-description {font-size: 14px;color: #6b7280;margin: 0;text-align: center;}.swipe-card.swiping {transition: none;cursor: grabbing}.swipe-card.swiped-left {animation: swipe-out-left 0.4s cubic-bezier(0.6, 0, 0.8, 1) forwards}.swipe-card.swiped-right {animation: swipe-out-right 0.4s cubic-bezier(0.6, 0, 0.8, 1) forwards}@keyframes swipe-out-left {to {transform: translateX(-120%) rotate(-20deg);opacity: 0}}@keyframes swipe-out-right {to {transform: translateX(120%) rotate(20deg);opacity: 0}}";
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.className = 'ddmp-modal-' + modalConfig.slug;
    container.innerHTML = '<div class="ddmp-modal-container"><div class=\"swipe-header\">  <h1>👗 Descubra seu Estilo</h1>  <div class=\"swipe-counter\">    <span class=\"swipe-left-count\">      <span class=\"counter-icon\">👎</span>      <span class=\"counter-value\">0</span>    </span>    <span class=\"swipe-right-count\">      <span class=\"counter-icon\">❤️</span>      <span class=\"counter-value\">0</span>    </span>  </div></div><div class=\"ddmp-modal-body\">  <div class=\"swipe-instruction\">    <p>Deslize os cards ou use os botões para escolher</p>  </div>    <div class=\"swipe-stack\"></div>    <div class=\"swipe-actions\">    <button class=\"swipe-btn swipe-btn-left\" data-action=\"left\">      <span class=\"btn-icon\">✕</span>      <span class=\"btn-label\">Não</span>    </button>    <button class=\"swipe-btn swipe-btn-right\" data-action=\"right\">      <span class=\"btn-icon\">♥</span>      <span class=\"btn-label\">Sim</span>    </button>  </div>    <div class=\"swipe-result\" style=\"display: none;\">    <div class=\"result-icon\">🎁</div>    <h2 class=\"result-text\">Perfeito!</h2>    <p class=\"result-subtitle\">Seu desconto exclusivo está pronto</p>    <button class=\"ddmp-btn-primary\">Resgatar Cupom</button>  </div></div></div>';

    this.modal = container;
    document.body.appendChild(container);
    
    this.renderCards();
    this.setupButtons();
  },

  renderCards: function() {
    const stack = this.modal.querySelector('.swipe-stack');
    if (!stack) return;

    stack.innerHTML = '';

    modalConfig.cards.forEach(function(card, idx) {
      const cardEl = document.createElement('div');
      cardEl.className = 'swipe-card';
      cardEl.dataset.index = idx;
      cardEl.style.zIndex = modalConfig.cards.length - idx;
      
      if (idx > 0) {
        cardEl.style.transform = 'scale(' + (1 - idx * 0.04) + ') translateY(' + (idx * 8) + 'px)';
        cardEl.style.opacity = (1 - idx * 0.15).toString();
      }

      const imageHtml = card.imageUrl 
        ? '<img src="' + card.imageUrl + '" class="swipe-card-image" alt="' + (card.title || '') + '" />'
        : (card.emoji ? '<div class="swipe-card-emoji">' + card.emoji + '</div>' : '');

      cardEl.innerHTML = imageHtml +
        '<h3 class="swipe-card-title">' + (card.title || card.text || '') + '</h3>' +
        (card.description ? '<p class="swipe-card-description">' + card.description + '</p>' : '') +
        '</div>';

      stack.appendChild(cardEl);
    });

    this.setupCardEvents();
  },

  setupCardEvents: function() {
    const cards = this.modal.querySelectorAll('.swipe-card');
    if (cards.length === 0) return;

    const topCard = cards[0];
    
    topCard.addEventListener('mousedown', function(e) { SwipeModal.onDragStart(e, topCard); });
    document.addEventListener('mousemove', function(e) { SwipeModal.onDragMove(e, topCard); });
    document.addEventListener('mouseup', function(e) { SwipeModal.onDragEnd(e, topCard); });

    topCard.addEventListener('touchstart', function(e) { SwipeModal.onDragStart(e.touches[0], topCard); });
    document.addEventListener('touchmove', function(e) { SwipeModal.onDragMove(e.touches[0], topCard); });
    document.addEventListener('touchend', function(e) { SwipeModal.onDragEnd(e.changedTouches[0], topCard); });
  },

  setupButtons: function() {
    const leftBtn = this.modal.querySelector('.swipe-btn-left');
    const rightBtn = this.modal.querySelector('.swipe-btn-right');

    if (leftBtn) {
      leftBtn.addEventListener('click', function() {
        SwipeModal.swipeCard('left');
      });
    }
    if (rightBtn) {
      rightBtn.addEventListener('click', function() {
        SwipeModal.swipeCard('right');
      });
    }
  },

  onDragStart: function(e, card) {
    this.dragState.isDragging = true;
    this.dragState.startX = e.clientX || e.pageX;
    this.dragState.startY = e.clientY || e.pageY;
    card.classList.add('swiping');
  },

  onDragMove: function(e, card) {
    if (!this.dragState.isDragging) return;

    const currentX = e.clientX || e.pageX;
    const currentY = e.clientY || e.pageY;
    const deltaX = currentX - this.dragState.startX;
    const deltaY = currentY - this.dragState.startY;

    const rotation = deltaX * 0.08;
    card.style.transform = 'translate(' + deltaX + 'px, ' + deltaY + 'px) rotate(' + rotation + 'deg)';

    const opacity = Math.max(0.3, 1 - Math.abs(deltaX) / 300);
    card.style.opacity = opacity.toString();
  },

  onDragEnd: function(e, card) {
    if (!this.dragState.isDragging) return;
    this.dragState.isDragging = false;
    card.classList.remove('swiping');

    const currentX = e.clientX || e.pageX;
    const deltaX = currentX - this.dragState.startX;

    if (Math.abs(deltaX) > 100) {
      this.swipeCard(deltaX < 0 ? 'left' : 'right');
    } else {
      card.style.transform = '';
      card.style.opacity = '';
    }
  },

  swipeCard: function(direction) {
    const cards = this.modal.querySelectorAll('.swipe-card');
    if (cards.length === 0) return;

    const topCard = cards[0];
    
    if (direction === 'left') {
      this.leftCount++;
      topCard.classList.add('swiped-left');
    } else {
      this.rightCount++;
      topCard.classList.add('swiped-right');
    }

    this.updateCounter();

    setTimeout(function() {
      topCard.remove();
      SwipeModal.currentCardIndex++;

      const remainingCards = SwipeModal.modal.querySelectorAll('.swipe-card');
      remainingCards.forEach(function(card, idx) {
        card.style.zIndex = remainingCards.length - idx;
        if (idx === 0) {
          card.style.transform = '';
          card.style.opacity = '1';
          SwipeModal.setupCardEvents();
        } else {
          card.style.transform = 'scale(' + (1 - idx * 0.04) + ') translateY(' + (idx * 8) + 'px)';
          card.style.opacity = (1 - idx * 0.15).toString();
        }
      });

      if (remainingCards.length === 0) {
        SwipeModal.showResult();
      }
    }, 400);
  },

  updateCounter: function() {
    const leftCountEl = this.modal.querySelector('.swipe-left-count .counter-value');
    const rightCountEl = this.modal.querySelector('.swipe-right-count .counter-value');

    if (leftCountEl) leftCountEl.textContent = this.leftCount.toString();
    if (rightCountEl) rightCountEl.textContent = this.rightCount.toString();
  },

  showResult: function() {
    const resultDiv = this.modal.querySelector('.swipe-result');
    const stack = this.modal.querySelector('.swipe-stack');
    const actions = this.modal.querySelector('.swipe-actions');

    const instruction = this.modal.querySelector('.swipe-instruction');

    if (stack) stack.style.display = 'none';
    if (actions) actions.style.display = 'none';
    if (instruction) instruction.style.display = 'none';
    
    if (resultDiv) {
      resultDiv.style.display = 'block';
    }

    const btn = this.modal.querySelector('.ddmp-btn-primary');
    if (btn) {
      btn.addEventListener('click', function() {
        SwipeModal.complete();
      });
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
      this.currentCardIndex = 0;
      this.leftCount = 0;
      this.rightCount = 0;
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

window.DDMPADS_MODALS['escolha-sua-roupa-agora'] = SwipeModal;

if (window.DDMPADS_MODAL_LOADED) {
  window.DDMPADS_MODAL_LOADED('escolha-sua-roupa-agora');
}
})();