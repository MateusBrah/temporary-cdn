(function(){'use strict';
const modalConfig = {
  id: 'cmif7b1na000dn9lxsd6hvf52',
  slug: 'escolha-seu-estilo-de-roupa',
  title: 'Escolha seu Estilo de Roupa',
  cards: [{"id":"card1","emoji":"👕","title":"Casual Chic","imageUrl":"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop","description":"Confortável e estiloso para o dia a dia"},{"id":"card2","emoji":"👔","title":"Formal Elegante","imageUrl":"https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop","description":"Sofisticado para eventos especiais"},{"id":"card3","emoji":"👟","title":"Esportivo Moderno","imageUrl":"https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=400&h=500&fit=crop","description":"Perfeito para atividades e academia"},{"id":"card4","emoji":"🧥","title":"Streetwear Urban","imageUrl":"https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=500&fit=crop","description":"Estilo urbano e descolado"},{"id":"card5","emoji":"👗","title":"Boho Vintage","imageUrl":"https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=500&fit=crop","description":"Retrô e cheio de personalidade"},{"id":"card6","emoji":"👚","title":"Minimalista Clean","imageUrl":"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=500&fit=crop","description":"Simples, clean e atemporal"}],
  leftAction: 'Não é meu estilo',
  rightAction: 'Adoro esse estilo',
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
    style.textContent = ".ddmp-modal-escolha-seu-estilo-de-roupa { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); z-index: 999999; display: none; align-items: center; justify-content: center; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; } .ddmp-modal-escolha-seu-estilo-de-roupa * { box-sizing: border-box; } .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-modal-container { max-width: 450px; width: 90%; max-height: 90vh; } .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-btn-primary { background: #667eea; color: #fff; border: none; padding: 16px 40px; border-radius: 30px; cursor: pointer; font-size: 18px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); } .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3); } .swipe-header { background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px 24px; text-align: center; color: white; } .swipe-header h1 { margin: 0 0 8px 0; font-size: 32px; font-weight: 700; } .swipe-header p { margin: 0 0 20px 0; font-size: 16px; opacity: 0.9; } .swipe-counter { display: flex; justify-content: center; gap: 30px; font-size: 20px; font-weight: 600; } .swipe-stack { position: relative; width: 100%; height: 450px; margin: 30px 0; } .swipe-card { position: absolute; width: 100%; height: 100%; background: white; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); display: flex; flex-direction: column; overflow: hidden; transition: transform 0.3s, opacity 0.3s; cursor: grab; } .swipe-card-image { width: 100%; height: 70%; object-fit: cover; background: #f0f0f0; } .swipe-card-content { padding: 20px; text-align: center; flex: 1; display: flex; flex-direction: column; justify-content: center; } .swipe-card-emoji { font-size: 48px; margin-bottom: 12px; } .swipe-card-title { font-size: 24px; font-weight: 700; color: #333; margin: 0 0 8px 0; } .swipe-card-description { font-size: 14px; color: #666; margin: 0; } .swipe-card.swiping { transition: none; cursor: grabbing; } .swipe-card.swiped-left { animation: swipe-out-left 0.5s ease-out forwards; } .swipe-card.swiped-right { animation: swipe-out-right 0.5s ease-out forwards; } @keyframes swipe-out-left { to { transform: translateX(-150%) rotate(-30deg); opacity: 0; } } @keyframes swipe-out-right { to { transform: translateX(150%) rotate(30deg); opacity: 0; } } .swipe-actions { display: flex; justify-content: center; gap: 50px; padding: 0 20px 30px; } .swipe-btn { width: 70px; height: 70px; border-radius: 50%; border: none; font-size: 32px; cursor: pointer; transition: transform 0.2s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.2); } .swipe-btn:active { transform: scale(0.9); } .swipe-btn-left { background: #f44336; } .swipe-btn-right { background: #4caf50; } .swipe-result { padding: 40px 20px; text-align: center; } .result-text { font-size: 28px; font-weight: 700; color: #333; margin: 0 0 12px 0; } .result-subtitle { font-size: 16px; color: #666; margin: 0 0 30px 0; } .ddmp-btn-primary { background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 16px 40px; border-radius: 30px; font-size: 18px; font-weight: 600; cursor: pointer; transition: transform 0.2s ease; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); } .ddmp-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5); } .ddmp-btn-primary:active { transform: translateY(0); }";
    document.head.appendChild(style);

    const container = document.createElement('div');
    container.className = 'ddmp-modal-' + modalConfig.slug;
    container.innerHTML = '<div class="ddmp-modal-container"><div class=\"swipe-header\">  <h1>👗 Qual é o seu estilo?</h1>  <p>Deslize para escolher suas roupas favoritas!</p>  <div class=\"swipe-counter\">    <span class=\"swipe-left-count\">👎 0</span>    <span class=\"swipe-right-count\">❤️ 0</span>  </div></div><div class=\"ddmp-modal-body\">  <div class=\"swipe-stack\">    <!-- Cards serão inseridos aqui pelo JS -->  </div>    <div class=\"swipe-actions\">    <button class=\"swipe-btn swipe-btn-left\" data-action=\"left\">👎</button>    <button class=\"swipe-btn swipe-btn-right\" data-action=\"right\">❤️</button>  </div>    <div class=\"swipe-result\" style=\"display: none;\">    <h2 class=\"result-text\">Estilo selecionado!</h2>    <p class=\"result-subtitle\">Resgate seu cupom de desconto</p>    <button class=\"ddmp-btn-primary\">Resgatar Desconto</button>  </div></div></div>';

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
        cardEl.style.transform = 'scale(' + (1 - idx * 0.05) + ') translateY(' + (idx * 10) + 'px)';
        cardEl.style.opacity = '0.8';
      }

      const imageHtml = card.imageUrl 
        ? '<img src="' + card.imageUrl + '" style="max-width:200px;max-height:200px;border-radius:12px;margin-bottom:20px;" />'
        : '';

      cardEl.innerHTML = imageHtml +
        '<h3 style="font-size:24px;font-weight:700;margin-bottom:12px;color:#333;">' + (card.title || card.text || '') + '</h3>' +
        '<p style="font-size:16px;color:#666;line-height:1.5;">' + (card.description || '') + '</p>';

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

    const rotation = deltaX * 0.1;
    card.style.transform = 'translate(' + deltaX + 'px, ' + deltaY + 'px) rotate(' + rotation + 'deg)';
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
          card.style.transform = 'scale(' + (1 - idx * 0.05) + ') translateY(' + (idx * 10) + 'px)';
        }
      });

      if (remainingCards.length === 0) {
        SwipeModal.showResult();
      }
    }, 500);
  },

  updateCounter: function() {
    const leftCountEl = this.modal.querySelector('.swipe-left-count');
    const rightCountEl = this.modal.querySelector('.swipe-right-count');
    
    if (leftCountEl) leftCountEl.textContent = '❤️ ' + this.rightCount;
    if (rightCountEl) rightCountEl.textContent = '👎 ' + this.leftCount;
  },

  showResult: function() {
    const resultDiv = this.modal.querySelector('.swipe-result');
    const stack = this.modal.querySelector('.swipe-stack');
    const actions = this.modal.querySelector('.swipe-actions');

    if (stack) stack.style.display = 'none';
    if (actions) actions.style.display = 'none';
    
    if (resultDiv) {
      resultDiv.style.display = 'block';
      
      const resultText = resultDiv.querySelector('.result-text');
      if (resultText) {
        resultText.textContent = 'Você completou! ❤️ ' + this.rightCount + ' | 👎 ' + this.leftCount;
      }
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

window.DDMPADS_MODALS['escolha-seu-estilo-de-roupa'] = SwipeModal;

if (window.DDMPADS_MODAL_LOADED) {
  window.DDMPADS_MODAL_LOADED('escolha-seu-estilo-de-roupa');
}
})();