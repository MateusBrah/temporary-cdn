(function(){'use strict';
const modalConfig={"id":"cmidaq2xw0005bh1djfpnihkc","slug":"testeeeee","title":"Titulo principal","subtitle":"assdasds","mode":"steps","steps":[{"type":"choice","title":"asss","options":[{"label":"asda","value":"2"}],"imageUrl":"https://dailytechhub.net/wp-content/uploads/2025/11/Red-White-Minimalist-Speed-Automotive-Logo-600-x-200-px.png","subtitle":"asd"},{"type":"loader","title":"loader titulo","imageUrl":"https://dailytechhub.net/wp-content/uploads/2025/11/Red-White-Minimalist-Speed-Automotive-Logo-600-x-200-px.png","subtitle":"subtitulo loader"},{"type":"cta","title":"","imageUrl":"https://dailytechhub.net/wp-content/uploads/2025/11/Red-White-Minimalist-Speed-Automotive-Logo-600-x-200-px.png"}],"theme":{"card":{"background":"#142841"},"buttons":{"color":"#fff","background":"#007bff"},"customCss":".ddmp-modal-container {\n  background-color: #000 @important;\n}","primaryColor":"#007bff","activeStepColor":"#e3f2fd"},"templates":{"choice_0":"<div class=\"step-choice\"><div class=\"ddmp-step-image\"><img src=\"https://dailytechhub.net/wp-content/uploads/2025/11/Red-White-Minimalist-Speed-Automotive-Logo-600-x-200-px.png\" alt=\"asss\" /></div><div class=\"ddmp-step-title\">asss</div><p class=\"ddmp-step-subtitle\">asd</p><div class=\"ddmp-choices\"><button class=\"ddmp-choice-btn\" data-value=\"2\">asda</button></div></div>","loader_1":"<div class=\"step-loader\"><div class=\"ddmp-step-image\"><img src=\"https://dailytechhub.net/wp-content/uploads/2025/11/Red-White-Minimalist-Speed-Automotive-Logo-600-x-200-px.png\" alt=\"loader titulo\" /></div><div class=\"ddmp-loader\"><div class=\"ddmp-spinner\"></div><p>Searching for opportunities...</p></div></div>","final_2":"<div class=\"step-final\"><div class=\"ddmp-step-image\"><img src=\"https://dailytechhub.net/wp-content/uploads/2025/11/Red-White-Minimalist-Speed-Automotive-Logo-600-x-200-px.png\" alt=\"CTA\" /></div><div class=\"ddmp-step-title\">Ready to claim?</div><p class=\"ddmp-step-desc\"></p><button class=\"ddmp-btn-primary\">UNLOCK NOW</button></div>"},"bodyHtml":"","styles":"/* Container principal do modal */ .ddmp-modal-testeeeee { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); z-index: 999999; display: none; align-items: center; justify-content: center; } /* Container interno */ .ddmp-modal-testeeeee .ddmp-modal-container { background: #142841; border-radius: 12px; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto; box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3); } /* Cabeçalho */ .ddmp-modal-testeeeee .ddmp-modal-header { text-align: center; padding: 20px; border-bottom: 1px solid #eee; } .ddmp-modal-testeeeee .ddmp-modal-header h2 { margin: 0; color: #007bff; font-size: 24px; } .ddmp-modal-testeeeee .ddmp-modal-header p { margin: 8px 0 0 0; color: #666; font-size: 14px; } /* Corpo do modal */ .ddmp-modal-testeeeee .ddmp-modal-body { padding: 20px; } /* Imagens nos steps */ .ddmp-modal-testeeeee .ddmp-step-image { text-align: center; margin-bottom: 20px; } .ddmp-modal-testeeeee .ddmp-step-image img { max-width: 100%; max-height: 200px; border-radius: 8px; object-fit: contain; } /* Título e subtítulo do step */ .ddmp-modal-testeeeee .ddmp-step-title { font-size: 20px; font-weight: 600; color: #007bff; margin-bottom: 12px; text-align: center; } .ddmp-modal-testeeeee .ddmp-step-subtitle { font-size: 14px; color: #666; margin-bottom: 16px; text-align: center; } /* Botão primário (CTA) */ .ddmp-modal-testeeeee .ddmp-btn-primary { background: #007bff; color: #fff; border: none; padding: 12px 24px; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: 600; width: 100%; } .ddmp-modal-testeeeee .ddmp-btn-primary:hover { opacity: 0.9; } /* Botões de escolha */ .ddmp-modal-testeeeee .ddmp-choice-btn { background: #f5f5f5; border: 2px solid #ddd; padding: 15px 20px; border-radius: 8px; cursor: pointer; font-size: 16px; transition: all 0.3s; text-align: left; position: relative; width: 100%; margin: 5px 0; } .ddmp-modal-testeeeee .ddmp-choice-btn:hover { background: #e9e9e9; border-color: #007bff; } .ddmp-modal-testeeeee .ddmp-choice-btn.selected { background: #e3f2fd; border-color: #007bff; } /* Badges (EASY, MEDIUM, HARD, etc.) */ .ddmp-modal-testeeeee .ddmp-badge { position: absolute; right: 10px; top: 50%; transform: translateY(-50%); padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; } .ddmp-modal-testeeeee .ddmp-badge-easy { background: #4caf50; color: #fff; } .ddmp-modal-testeeeee .ddmp-badge-medium { background: #ff9800; color: #fff; } .ddmp-modal-testeeeee .ddmp-badge-hard { background: #f44336; color: #fff; } /* Loader (carregando) */ .ddmp-modal-testeeeee .ddmp-loader { text-align: center; padding: 40px 20px; } .ddmp-modal-testeeeee .ddmp-spinner { border: 4px solid #f3f3f3; border-top: 4px solid #007bff; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; margin: 0 auto 20px; } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } /* CSS Customizado do theme (modo steps) */ .ddmp-modal-container { background-color: #000 @important; } /* CSS Customizado adicional (ambos os modos) */"};
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
    container.className="ddmp-modal-testeeeee";
    
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