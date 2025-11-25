(function(){'use strict';
const modalConfig={"id":"cmif6nt5z0001wl7co352izvb","slug":"escolha-seu-estilo-de-roupa","title":"Escolha seu Estilo de Roupa","subtitle":null,"mode":"steps","steps":[],"theme":{},"templates":{},"bodyHtml":"","styles":"/* Container principal do modal */ .ddmp-modal-escolha-seu-estilo-de-roupa { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); z-index: 999999; display: none; align-items: center; justify-content: center; } /* Container interno */ .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-modal-container { background: #fff; border-radius: 12px; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3); } /* Cabeçalho */ .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-modal-header { text-align: center; padding: 20px; border-bottom: 1px solid #eee; } .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-modal-header h2 { margin: 0; color: #333; font-size: 24px; } .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-modal-header p { margin: 8px 0 0 0; color: #666; font-size: 14px; } /* Corpo do modal */ .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-modal-body { padding: 20px; } /* Imagens nos steps */ .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-step-image { text-align: center; margin-bottom: 20px; } .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-step-image img { max-width: 100%; max-height: 200px; border-radius: 8px; object-fit: contain; } /* Título e subtítulo do step */ .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-step-title { font-size: 20px; font-weight: 600; color: #333; margin-bottom: 12px; text-align: center; } .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-step-subtitle { font-size: 14px; color: #666; margin-bottom: 16px; text-align: center; } /* Botão primário (CTA) */ .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-btn-primary { background: #007bff; color: #fff; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600; width: 100%; } .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-btn-primary:hover { opacity: 0.9; } /* Botões de escolha */ .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-choice-btn { background: #f5f5f5; border: 2px solid #ddd; padding: 15px 20px; border-radius: 8px; cursor: pointer; font-size: 16px; transition: all 0.3s; text-align: left; position: relative; width: 100%; margin: 5px 0; } .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-choice-btn:hover { background: #e9e9e9; border-color: #007bff; } .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-choice-btn.selected { background: #e3f2fd; border-color: #007bff; } /* Badges (EASY, MEDIUM, HARD, etc.) */ .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-badge { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; } .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-badge-easy { background: #4caf50; color: #fff; } .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-badge-medium { background: #ff9800; color: #fff; } .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-badge-hard { background: #f44336; color: #fff; } /* Loader (carregando) */ .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-loader { text-align: center; padding: 40px 20px; } .ddmp-modal-escolha-seu-estilo-de-roupa .ddmp-spinner { border: 4px solid #f3f3f3; border-top: 4px solid #007bff; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 20px; } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } /* CSS Customizado do theme (modo steps) */ /* CSS Customizado adicional (ambos os modos) */ .swipe-header { background: linear-gradient(135deg, #667eea, #764ba2); padding: 30px 24px; text-align: center; color: white; } .swipe-header h1 { margin: 0 0 8px 0; font-size: 32px; font-weight: 700; } .swipe-header p { margin: 0 0 20px 0; font-size: 16px; opacity: 0.9; } .swipe-counter { display: flex; justify-content: center; gap: 30px; font-size: 20px; font-weight: 600; } .swipe-stack { position: relative; width: 100%; height: 450px; margin: 30px 0; } .swipe-card { position: absolute; width: 100%; height: 100%; background: white; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.2); display: flex; flex-direction: column; overflow: hidden; transition: transform 0.3s, opacity 0.3s; cursor: grab; } .swipe-card-image { width: 100%; height: 70%; object-fit: cover; background: #f0f0f0; } .swipe-card-content { padding: 20px; text-align: center; flex: 1; display: flex; flex-direction: column; justify-content: center; } .swipe-card-emoji { font-size: 48px; margin-bottom: 12px; } .swipe-card-title { font-size: 24px; font-weight: 700; color: #333; margin: 0 0 8px 0; } .swipe-card-description { font-size: 14px; color: #666; margin: 0; } .swipe-card.swiping { transition: none; cursor: grabbing; } .swipe-card.swiped-left { animation: swipe-out-left 0.5s ease-out forwards; } .swipe-card.swiped-right { animation: swipe-out-right 0.5s ease-out forwards; } @keyframes swipe-out-left { to { transform: translateX(-150%) rotate(-30deg); opacity: 0; } } @keyframes swipe-out-right { to { transform: translateX(150%) rotate(30deg); opacity: 0; } } .swipe-actions { display: flex; justify-content: center; gap: 50px; padding: 0 20px 30px; } .swipe-btn { width: 70px; height: 70px; border-radius: 50%; border: none; font-size: 32px; cursor: pointer; transition: transform 0.2s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.2); } .swipe-btn:active { transform: scale(0.9); } .swipe-btn-left { background: #f44336; } .swipe-btn-right { background: #4caf50; } .swipe-result { padding: 40px 20px; text-align: center; } .result-text { font-size: 28px; font-weight: 700; color: #333; margin: 0 0 12px 0; } .result-subtitle { font-size: 16px; color: #666; margin: 0 0 30px 0; } .ddmp-btn-primary { background: linear-gradient(135deg, #667eea, #764ba2); color: white; border: none; padding: 16px 40px; border-radius: 30px; font-size: 18px; font-weight: 600; cursor: pointer; transition: transform 0.2s ease; box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4); } .ddmp-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5); } .ddmp-btn-primary:active { transform: translateY(0); }"};
window.DDMPADS_MODALS=window.DDMPADS_MODALS||{};
const modal={
  id:modalConfig.id,
  slug:modalConfig.slug,
  title:modalConfig.title,
  subtitle:modalConfig.subtitle,
  mode:modalConfig.mode||'steps',
  steps:modalConfig.steps||[],
  theme:modalConfig.theme||{},
  bodyHtml:modalConfig.bodyHtml||'',
  modal:null,
  currentStep:0,
  scrollY:0,
  isTransitioning:false,
  
  /**
   * Inicializa o modal
   */
  init:function(){
    this.createModal();
    this.setupEvents();
  },
  
  /**
   * Cria estrutura HTML do modal
   */
  createModal:function(){
    const style=document.createElement("style");
    style.textContent=modalConfig.styles;
    document.head.appendChild(style);
    
    const container=document.createElement("div");
    container.className="ddmp-modal-escolha-seu-estilo-de-roupa";
    
    // MODO CUSTOM: Usa HTML customizado diretamente
    if(this.mode==='custom'&&this.bodyHtml){
      container.innerHTML='<div class="ddmp-modal-container">'+this.bodyHtml+'</div>';
    }
    // MODO STEPS: Cria estrutura padrão com header e body
    else{
      container.innerHTML='<div class="ddmp-modal-container"><div class="ddmp-modal-header"><h2>'+modalConfig.title+'</h2>'+(modalConfig.subtitle?'<p>'+modalConfig.subtitle+'</p>':'')+'</div><div class="ddmp-modal-body"></div></div>';
    }
    
    this.modal=container;
    document.body.appendChild(container);
    
    // MODO STEPS: Renderiza primeiro step
    if(this.mode==='steps'){
      this.renderStep(0);
    }
  },
  
  /**
   * Configura event listeners
   */
  setupEvents:function(){
    console.log("[CustomModal] setupEvents chamado");
    const choiceBtns=this.modal.querySelectorAll(".ddmp-choice-btn");
    console.log("[CustomModal] setupEvents - encontrou",choiceBtns.length,"botões de escolha");
    choiceBtns.forEach((btn,idx)=>{
      btn.addEventListener("click",(e)=>{
        e.preventDefault();
        e.stopPropagation();
        const value=e.currentTarget.dataset.value;
        console.log("[CustomModal] click no botão",idx,"com value:",value);
        this.selectChoice(value);
      },{once:true});
    });
    
    const primaryBtn=this.modal.querySelector(".ddmp-btn-primary");
    if(primaryBtn){
      console.log("[CustomModal] setupEvents - encontrou botão primário");
      primaryBtn.addEventListener("click",(e)=>{
        e.preventDefault();
        e.stopPropagation();
        console.log("[CustomModal] click no botão primário - mode:",this.mode);
        if(this.isTransitioning){
          console.log("[CustomModal] primaryBtn - BLOQUEADO por transição");
          return;
        }
        // MODO CUSTOM: vai direto para complete
        if(this.mode==='custom'){
          this.complete();
        }
        // MODO STEPS: verifica se é último step
        else if(this.currentStep===this.steps.length-1){
          this.complete();
        }else{
          this.nextStep();
        }
      },{once:true});
    }
  },
  
  /**
   * Renderiza um step específico
   */
  renderStep:function(idx){
    console.log("[CustomModal] renderStep chamado - idx:",idx,"tipo:",this.steps[idx]?.type);
    const body=this.modal.querySelector(".ddmp-modal-body");
    if(!body)return;
    
    const step=this.steps[idx];
    if(!step)return;
    
    let html="";
    
    if(step.type==="choice"&&step.options){
      const imageHtml=step.imageUrl?'<div class="ddmp-step-image"><img src="'+step.imageUrl+'" alt="'+(step.title||'Step image')+'" /></div>':'';
      const subtitleHtml=step.subtitle?'<p class="ddmp-step-subtitle">'+step.subtitle+'</p>':'';
      const optionsHtml=step.options.map(opt=>{
        const badgeHtml=opt.badge?'<span class="ddmp-badge ddmp-badge-'+opt.badge.toLowerCase()+'">'+opt.badge+'</span>':'';
        return'<button class="ddmp-choice-btn" data-value="'+opt.value+'">'+opt.label+badgeHtml+'</button>';
      }).join("");
      html='<div class="step-choice">'+imageHtml+'<div class="ddmp-step-title">'+step.title+'</div>'+subtitleHtml+'<div class="ddmp-choices">'+optionsHtml+'</div></div>';
    }
    else if(step.type==="loader"){
      const imageHtml=step.imageUrl?'<div class="ddmp-step-image"><img src="'+step.imageUrl+'" alt="'+(step.title||'Loading')+'" /></div>':'';
      html='<div class="step-loader">'+imageHtml+'<div class="ddmp-loader"><div class="ddmp-spinner"></div><p>'+((step.loaderText||step.text)||"Searching for opportunities...")+'</p></div></div>';
    }
    else if(step.type==="final"||step.type==="cta"){
      const imageHtml=step.imageUrl?'<div class="ddmp-step-image"><img src="'+step.imageUrl+'" alt="'+(step.title||'CTA')+'" /></div>':'';
      html='<div class="step-final">'+imageHtml+'<div class="ddmp-step-title">'+(step.title||"Ready to claim?")+'</div><p class="ddmp-step-desc">'+(step.description||"")+'</p><button class="ddmp-btn-primary">'+(step.cta||step.ctaText||"UNLOCK NOW")+'</button></div>';
    }
    else{
      const imageHtml=step.imageUrl?'<div class="ddmp-step-image"><img src="'+step.imageUrl+'" alt="Step '+(idx+1)+'" /></div>':'';
      html='<div class="step-generic">'+imageHtml+'<span class="ddmp-step-number">'+(idx+1)+'</span><span class="ddmp-step-text">'+(step.title||"Etapa "+(idx+1))+'</span></div>';
    }
    
    body.innerHTML=html;
    this.setupEvents();
  },
  
  /**
   * Seleciona uma escolha e avança
   */
  selectChoice:function(value){
    console.log("[CustomModal] selectChoice - value:",value,"isTransitioning:",this.isTransitioning);
    if(this.isTransitioning){
      console.log("[CustomModal] selectChoice - BLOQUEADO por transição em andamento");
      return;
    }
    this.isTransitioning=true;
    const btns=this.modal.querySelectorAll(".ddmp-choice-btn");
    btns.forEach(btn=>{
      btn.classList.remove("selected");
      if(btn.dataset.value===value)btn.classList.add("selected");
    });
    setTimeout(()=>{
      this.isTransitioning=false;
      console.log("[CustomModal] selectChoice - timeout concluído, chamando nextStep");
      this.nextStep();
    },500);
  },
  
  /**
   * Avança para próximo step
   */
  nextStep:function(){
    console.log("[CustomModal] nextStep - currentStep:",this.currentStep,"isTransitioning:",this.isTransitioning);
    if(this.isTransitioning){
      console.log("[CustomModal] nextStep - BLOQUEADO por transição em andamento");
      return;
    }
    if(this.currentStep>=this.steps.length-1){
      console.log("[CustomModal] nextStep - já está no último step");
      return;
    }
    this.isTransitioning=true;
    this.currentStep++;
    console.log("[CustomModal] nextStep - avançando para step:",this.currentStep);
    this.renderStep(this.currentStep);
    const currentStepData=this.steps[this.currentStep];
    if(currentStepData.type==="loader"){
      console.log("[CustomModal] nextStep - é loader, aguardando duration:",currentStepData.duration||2000);
      setTimeout(()=>{
        this.isTransitioning=false;
        this.nextStep();
      },currentStepData.duration||2000);
    }else{
      console.log("[CustomModal] nextStep - não é loader, liberando transição");
      this.isTransitioning=false;
    }
  },
  
  /**
   * Bloqueia scroll da página
   */
  blockScroll:function(){
    console.log("[CustomModal] blockScroll() chamado");
    this.scrollY=window.scrollY;
    document.body.style.position="fixed";
    document.body.style.top="-"+this.scrollY+"px";
    document.body.style.left="0";
    document.body.style.right="0";
    document.body.style.overflow="hidden";
    console.log("[CustomModal] Scroll bloqueado na posição:",this.scrollY);
  },
  
  /**
   * Desbloqueia scroll da página
   */
  allowScroll:function(){
    console.log("[CustomModal] allowScroll() chamado");
    const savedScrollY=this.scrollY||0;
    console.log("[CustomModal] scrollY salvo:",savedScrollY);
    document.body.style.position="";
    document.body.style.top="";
    document.body.style.left="";
    document.body.style.right="";
    document.body.style.overflow="";
    window.scrollTo(0,savedScrollY);
    console.log("[CustomModal] Scroll restaurado para posição:",savedScrollY);
  },
  
  /**
   * Fecha e remove modal
   */
  close:function(){
    console.log("[CustomModal] close() chamado");
    console.log("[CustomModal] Estado antes: modal =",this.modal?"existe":"null");
    if(this.modal){
      this.allowScroll();
      console.log("[CustomModal] Scroll liberado");
      this.modal.remove();
      this.modal=null;
      this.currentStep=0;
      console.log("[CustomModal] Modal removido e resetado");
    }else{
      console.log("[CustomModal] Modal já era null");
    }
  },
  
  /**
   * Completa o modal e exibe rewarded
   */
  complete:function(){
    console.log("[CustomModal] complete() chamado");
    this.close();
    if(window.ddmpAds&&window.ddmpAds.showRewarded){
      console.log("[CustomModal] Chamando showRewarded...");
      window.ddmpAds.showRewarded(()=>{
        console.log("[CustomModal] Rewarded exibido após completar modal");
      });
    }else{
      console.error("[CustomModal] ddmpAds.showRewarded não disponível");
    }
  },
  
  /**
   * Exibe o modal
   */
  show:function(config){
    console.log("[CustomModal] show() chamado");
    console.log("[CustomModal] Cookie rewarded_shown:",window.ddmpAds?.getCookie("rewarded_shown"));
    if(window.ddmpAds&&window.ddmpAds.getCookie("rewarded_shown")){
      console.log("[CustomModal] Cookie já existe - ABORTANDO show()");
      return;
    }
    if(!this.modal){
      console.log("[CustomModal] Criando modal...");
      this.init();
    }
    if(this.modal){
      this.modal.style.display="flex";
      console.log("[CustomModal] Modal exibido (display: flex)");
    }
    this.blockScroll();
    console.log("[CustomModal] Scroll bloqueado");
    if(config&&config.onShow)config.onShow();
  }
};
window.DDMPADS_MODALS[modalConfig.slug]=modal;
if(window.DDMPADS_MODAL_LOADED){
  window.DDMPADS_MODAL_LOADED(modalConfig.slug);
}
})();