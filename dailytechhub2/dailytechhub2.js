// DDMPADS - Daily Tech Hub
// Gerado em: 2025-11-26T14:14:52.554Z
// Rewarded Ads: ATIVADO
// Modais: 2 disponíveis

(function(){'use strict';
const CONFIG={"g":"136870988","p":"dailytechhub.net","dp":"0","pk":"ddmp_price","fn":"dailytechhub2.js","sn":"Daily Tech Hub","refresh":{"enabled":true,"delay":30,"interval":30,"maxCount":0},"rw":true,"rp":["/quantum-computing-us-labs"],"_rewardedMeta":{"rpagesRegex":["^/quantum-computing-us-labs$"],"hasRewarded":true}};
const AD_UNITS={"d":{"t":["rewarded"],"s":["all"],"c":["all"],"v":[""],"p":["*"],"sz":[],"di":[],"pr":[]},"m":[[0,0,0,0,0,71]],"k":[[0,0,0,0,0,67]],"mk":{"all|all|rewarded":[0]},"kk":{"all|all|rewarded":[0]}};
const PRICE_RULES={"tree":{},"flat":{}};
const FALLBACK_MODAL=null;
const CUSTOM_MODALS=[{"id":"cmif7b1na000dn9lxsd6hvf52","slug":"escolha-seu-estilo-de-roupa","fileUrl":"https://ddmpads-cdn.pages.dev/dailytechhub2/modals/modal-dailytechhub2-escolha-seu-estilo-de-roupa.js"},{"id":"cmig334rv0005ozr5jl020wow","slug":"choose-your-next-wardrobe","fileUrl":"https://ddmpads-cdn.pages.dev/dailytechhub2/modals/modal-dailytechhub2-choose-your-next-wardrobe.js"}];
const MODAL_RULES=[{"modalId":"cmig334rv0005ozr5jl020wow","priority":10,"paths":["/quantum-computing-us-labs"],"sources":["teste"],"geos":["all"],"devices":["*"]},{"modalId":"cmif7b1na000dn9lxsd6hvf52","priority":10,"paths":["/quantum-computing-us-labs"],"sources":["*"],"geos":["br"],"devices":["*"]}];

class ModalMatcher {
  /**
   * Faz matching de modal baseado nas regras configuradas
   * 
   * @param {string} path - Caminho da página atual (ex: /blog/post-1)
   * @param {string} source - Origem do tráfego (ex: google, facebook, direct)
   * @param {string} geo - Código do país (ex: US, BR, all)
   * @param {string} device - Tipo de dispositivo (mobile ou desktop)
   * @returns {string|null} - Slug do modal ou null se não houver match
   */
  static match(path, source, geo, device) {
    const rules = MODAL_RULES || [];
    
    // Se não há regras configuradas, retorna null
    if (!rules.length) return null;
    
    const matches = [];
    
    // Avalia cada regra
    rules.forEach(rule => {
      // Verifica match de path (suporta wildcards)
      const pathMatch = rule.paths.some(p => {
        const regex = new RegExp(p.replace(/\*/g, ".*"));
        return regex.test(path);
      });
      
      // Verifica match de source
      const sourceMatch = rule.sources.includes("*") || 
                         rule.sources.includes(source);
      
      // Verifica match de geo
      const geoMatch = rule.geos.includes("*") || 
                      rule.geos.includes(geo);
      
      // Verifica match de device
      const deviceMatch = rule.devices.includes("*") || 
                         rule.devices.includes(device);
      
      // Se TODAS as condições batem, adiciona aos matches
      if (pathMatch && sourceMatch && geoMatch && deviceMatch) {
        matches.push({
          modalId: rule.modalId,
          priority: rule.priority
        });
      }
    });
    
    // Se não encontrou nenhum match, retorna null
    if (!matches.length) return null;
    
    // Ordena por prioridade (maior primeiro)
    matches.sort((a, b) => b.priority - a.priority);
    
    // Busca o modal correspondente em CUSTOM_MODALS
    const customModal = CUSTOM_MODALS.find(m => m.id === matches[0].modalId);
    
    // Retorna o slug do modal (usado para carregar o arquivo)
    return customModal ? customModal.slug : null;
  }
}
class ModalLoader {
  constructor() {
    // Cache de modais já carregados (Map: key -> modal object)
    this.cache = new Map();
    
    // Callbacks pendentes para cada modal sendo carregado
    this.pendingLoads = new Map();
    
    // ID do modal que fez match com as regras atuais
    this.matchedModalId = null;
  }

  /**
   * Carrega um modal externo dinamicamente
   * 
   * @param {string} slug - Slug do modal (ex: "mt-teste")
   * @param {function} callback - Callback executado após carregar (ou falhar)
   * @param {number} timeout - Tempo máximo de espera em ms (padrão: 10000)
   */
  load(slug, callback, timeout = 10000) {
    // Se não foi fornecido slug, chama callback com null
    if (!slug) {
      callback && callback(null);
      return;
    }

    // Cria chave única para este modal
    const key = "dailytechhub2-" + slug;

    // Se já está em cache, retorna imediatamente
    if (this.cache.has(key)) {
      const cached = this.cache.get(key);
      callback && callback(cached);
      return cached;
    }

    // Se já está sendo carregado, adiciona callback à fila
    if (this.pendingLoads.has(key)) {
      const pending = this.pendingLoads.get(key);
      callback && pending.push(callback);
      return;
    }

    // Inicializa lista de callbacks pendentes
    this.pendingLoads.set(key, []);

    // Monta URL do arquivo do modal
      const url = "https://cdn.jsdelivr.net/gh/MateusBrah/temporary-cdn@abc/dailytechhub2/dailytechhub2.js?v=222123";


    // Cria script tag para carregar o modal
    const script = document.createElement("script");
    script.src = url;

    // Configura timeout para falhar se demorar muito
    let timeoutId = setTimeout(() => {
      script.remove();
      this.pendingLoads.delete(key);
      console.error("Timeout ao carregar modal:", slug);
      
      const callbacks = this.pendingLoads.get(key) || [];
      callbacks.forEach(cb => cb && cb(null));
      callback && callback(null);
    }, timeout);

    // Handler de sucesso
    script.onload = () => {
      clearTimeout(timeoutId);
      
      // Modal deve ter se auto-registrado em window.DDMPADS_MODALS
      const modal = window.DDMPADS_MODALS && window.DDMPADS_MODALS[slug];
      
      if (modal) {
        // Armazena em cache
        this.cache.set(key, modal);
        
        // Executa todos os callbacks pendentes
        const callbacks = this.pendingLoads.get(key) || [];
        callbacks.forEach(cb => cb && cb(modal));
        callback && callback(modal);
      } else {
        console.error("Modal não encontrado:", slug);
        const callbacks = this.pendingLoads.get(key) || [];
        callbacks.forEach(cb => cb && cb(null));
        callback && callback(null);
      }
      
      this.pendingLoads.delete(key);
    };

    // Handler de erro
    script.onerror = () => {
      clearTimeout(timeoutId);
      script.remove();
      this.pendingLoads.delete(key);
      console.error("Erro ao carregar modal:", slug);
      
      const callbacks = this.pendingLoads.get(key) || [];
      callbacks.forEach(cb => cb && cb(null));
      callback && callback(null);
    };

    // Adiciona script ao DOM para iniciar carregamento
    document.head.appendChild(script);
  }

  /**
   * Encontra o melhor modal baseado nas regras
   * Usa ModalMatcher para fazer o matching
   */
  findBestMatch(path, source, geo, device) {
    return ModalMatcher.match(path, source, geo, device);
  }

  /**
   * Exibe um modal específico pelo slug
   * Se falhar, mostra fallback
   */
  show(slug, config) {
    if (!slug) {
      this.showFallback();
      return;
    }

    this.load(slug, modal => {
      if (modal && modal.show) {
        modal.show(config);
      } else {
        console.warn("Modal não encontrado ou inválido:", slug);
        this.showFallback();
      }
    });
  }

  /**
   * Encontra e exibe o melhor modal baseado no contexto
   */
  showBestMatch(path, source, geo, device) {
    const slug = this.findBestMatch(path, source, geo, device);
    this.show(slug);
  }

  /**
   * Exibe modal fallback (DefaultModal) ou carrega regular ads se não houver modal
   */
  showFallback() {
    if (window.DefaultModal) {
      window.DefaultModal.show();
    } else {
      console.log("[ModalLoader] Nenhum modal disponível - carregando anúncios regulares");
      if (window.ddmpAds && window.ddmpAds.showRegularAds) {
        window.ddmpAds.showRegularAds();
      }
    }
  }

  /**
   * Inicializa o ModalLoader
   * Aguarda DDMPAds estar pronto e faz matching inicial
   */
  init() {
    const checkDDMP = () => {
      // Aguarda window.ddmpAds estar disponível
      if (!window.ddmpAds) {
        setTimeout(checkDDMP, 100);
        return;
      }

      // Extrai contexto atual
      const path = window.ddmpAds.path || 
                   window.location.pathname.replace(/\/$/,"");
      const source = window.ddmpAds.source || "direct";
      const geo = window.ddmpAds.geo || "all";
      const device = window.ddmpAds.device || "desktop";

      // Encontra modal que faz match com contexto atual
      this.matchedModalId = this.findBestMatch(path, source, geo, device);

      // Pré-carrega o modal (se houver match)
      if (this.matchedModalId) {
        this.load(this.matchedModalId, null, 5000);
      }

      // Configura listener para rewarded ads
      this.attachRewardedListener();
    };

    checkDDMP();
  }

  /**
   * Configura listener para evento rewardedSlotReady
   * Quando rewarded estiver pronto, exibe o modal correto
   */
  attachRewardedListener() {
    const setup = () => {
      // Aguarda Google Tag Manager estar disponível
      if (!window.googletag || !window.googletag.pubads) {
        setTimeout(setup, 100);
        return;
      }

      // Escuta evento de rewarded pronto
      window.googletag.pubads().addEventListener("rewardedSlotReady", () => {
        console.log("[ModalLoader] rewardedSlotReady");
        
        const modalId = this.matchedModalId;
        
        if (modalId) {
          // Exibe modal customizado
          this.show(modalId);
        } else {
          // Exibe modal fallback
          this.showFallback();
        }
      });
    };

    setup();
  }
}

// Cria instância global do ModalLoader
window.ModalLoader = new ModalLoader();

// Auto-inicializa quando DOM estiver pronto
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => window.ModalLoader.init());
} else {
  window.ModalLoader.init();
}
const FLAGS={ENABLED:1,OOP:2,NR:4,LAZY:8,CUSTOM_PATH:16,HAS_PRICE:32,REWARDED:64};class UD{constructor(d){this.d=d.d;this.m=d.m;this.k=d.k;this.mk=d.mk;this.kk=d.kk;this.mp=d.mp;this.kp=d.kp;this.mt=d.mt;this.kt=d.kt}getUnit(dv,i){const u=(dv==="mobile"?this.m:this.k)[i];if(!u)return null;const[ti,si,ci,vi,pi,f,szi,dii,pri]=u,unit={t:this.d.t[ti],s:this.d.s[si],c:this.d.c[ci],page:this.d.p[pi]};if(vi>0)unit.v=this.d.v[vi];if(f&FLAGS.ENABLED)unit.e=true;if(f&FLAGS.OOP)unit.oop=true;if(f&FLAGS.NR)unit.nr=true;if(f&FLAGS.REWARDED)unit.rw=true;if(szi!==undefined){unit.sz=this.d.sz[szi];unit.di=dii!==undefined?this.d.di[dii]:`div-${unit.t}`}if(f&FLAGS.HAS_PRICE&&pri!==undefined)unit.pr=this.d.pr[pri];return unit}rebuild(){return{mobile:this.rebuildDevice("mobile"),desktop:this.rebuildDevice("desktop")}}rebuildDevice(dv){const units=[],byKey={},byPage={},patterns=[],dk=dv==="mobile",data=dk?this.m:this.k,keys=dk?this.mk:this.kk,pages=dk?this.mp:this.kp,pats=dk?this.mt:this.kt;data.forEach((_,idx)=>{const unit=this.getUnit(dv,idx);if(!unit)return;units.push(unit);unit._score=((unit.page&&unit.page!=="*")?8:0)+((unit.s!=="all")?4:0)+((unit.c!=="all")?2:0)+(unit.v?1:0)});if(keys){Object.entries(keys).forEach(([k,idxs])=>{byKey[k]=idxs.map(i=>units[i])})}if(pages){Object.entries(pages).forEach(([p,idxs])=>{byPage[p]=idxs.map(i=>units[i])})}if(pats){pats.forEach(([idx,regex])=>{const unit=units[idx];if(unit){unit._regex=regex;patterns.push(unit)}})}return{a:units,bk:byKey,bp:byPage,pt:patterns}}}const Utils={isMobile:()=>/Mobi|Android/i.test(navigator.userAgent)||768>=window.innerWidth,getGeo(){const a=new URLSearchParams(window.location.search),b=a.get("test_geo")||a.get("geo");if(b)return sessionStorage.setItem("ddmp_geo",b.toUpperCase()),b.toUpperCase();const c=sessionStorage.getItem("ddmp_geo");return c||"all"},getUtmParams(){const a=new URLSearchParams(window.location.search),b={};return["utm_source","utm_medium","utm_campaign","utm_term","utm_content"].forEach(c=>{b[c]=a.get(c)||sessionStorage.getItem(c)||"direct",a.get(c)&&sessionStorage.setItem(c,a.get(c))}),b}};class DDMPAds {
  constructor() {
    // Inicializa arrays de slots
    this.slots = [];
    this.refreshableSlots = [];
    
    // Detecta dispositivo e contexto
    this.device = Utils.isMobile() ? "mobile" : "desktop";
    this.geo = Utils.getGeo();
    this.utms = Utils.getUtmParams();
    this.path = window.location.pathname.replace(/\/$/, "");
    this.source = this.utms.utm_source || "direct";
    
    // Cache de preços para performance
    this.priceCache = new Map();
    
    // Controles de Rewarded Ads
    this.isRewardedMode = false;
    this.rewardedSlot = null;
    this.regularAdsLoaded = false;
    this.rewardedReady = false;
    this.rewardedCallback = null;
    this.makeRewardedVisible = null;
    this.rewardedInitialized = false;
  }

  /**
   * Define cookie com expiração em horas
   */
  setCookie(name, value, hours) {
    const d = new Date();
    d.setTime(d.getTime() + (hours * 60 * 60 * 1000));
    document.cookie = name + "=" + value + ";expires=" + d.toUTCString() + ";path=/";
  }

  /**
   * Obtém valor de cookie
   */
  getCookie(name) {
    const n = name + "=";
    const ca = document.cookie.split(";");
    for (let c of ca) {
      c = c.trim();
      if (c.indexOf(n) === 0) return c.substring(n.length);
    }
    return null;
  }

  /**
   * Inicializa o sistema de anúncios
   * Decide entre modo Rewarded ou Normal baseado em configurações
   */
  init() {
    window.googletag = window.googletag || { cmd: [] };
    this.ensureViewport();
    
    // Verifica se há modais disponíveis (customizados ou fallback)
    const hasModals = (typeof CUSTOM_MODALS !== 'undefined' && CUSTOM_MODALS && CUSTOM_MODALS.length > 0) || 
                      (typeof FALLBACK_MODAL !== 'undefined' && FALLBACK_MODAL && FALLBACK_MODAL.id);
    
    // Verifica se deve ativar modo Rewarded (só se houver modais disponíveis)
    if (CONFIG.rw && hasModals && this.isInRPages() && !this.getCookie("rewarded_shown")) {
      this.isRewardedMode = true;
      this.setupRewardedMode();
      this.initRewarded();
    } else {
      this.initNormalMode();
    }
  }

  /**
   * Verifica se rewarded está pronto para exibição
   */
  canShowRewarded() {
    return this.rewardedReady && 
           this.makeRewardedVisible && 
           !this.getCookie("rewarded_shown");
  }

  /**
   * Garante que existe tag viewport no documento
   */
  ensureViewport() {
    if (!document.querySelector('meta[name="viewport"]')) {
      const m = document.createElement("meta");
      m.name = "viewport";
      m.content = "width=device-width,initial-scale=1";
      document.head.appendChild(m);
    }
  }

  /**
   * Verifica se a página atual está nas páginas de rewarded
   */
  isInRPages() {
    if (!CONFIG._rewardedMeta || !CONFIG._rewardedMeta.rpagesRegex) return false;
    const p = this.path;
    return CONFIG._rewardedMeta.rpagesRegex.some(regex => new RegExp(regex).test(p));
  }

  /**
   * Configura modo Rewarded - busca unit rewarded habilitada
   */
  setupRewardedMode() {
    const decoder = new UD(AD_UNITS);
    const data = decoder.rebuildDevice(this.device);
    if (!data || !data.a) return;
    
    this.rewardedUnit = data.a.find(u => u.t === "rewarded" && u.e === true);
  }

  /**
   * Inicializa modo normal de anúncios
   */
  initNormalMode() {
    const units = this.gFAU(); // Get Filtered Ad Units
    const priorityMap = {
      "top": 1,
      "interstitial": 2,
      "anchor": 3,
      "content": 4,
      "sidebar": 5
    };
    
    const sortedUnits = units.sort((a, b) => 
      (priorityMap[a.t] || 99) - (priorityMap[b.t] || 99)
    );
    
    sortedUnits.forEach(unit => this.cS(unit)); // Create Slot
    
    googletag.cmd.push(() => this.sGPT()); // Setup GPT
  }

  /**
   * Inicializa modo Rewarded
   * Retorna Promise com status de disponibilidade
   */
  initRewarded() {
    // Verifica cookie
    if (this.getCookie("rewarded_shown")) {
      this.showRegularAds();
      return Promise.resolve({ available: false, reason: "cookie" });
    }
    
    // Verifica elegibilidade
    if (!this.isRewardedMode || !this.rewardedUnit || this.rewardedInitialized) {
      this.showRegularAds();
      return Promise.resolve({ available: false, reason: "not_eligible" });
    }
    
    this.rewardedInitialized = true;
    
    return new Promise((resolve) => {
      googletag.cmd.push(() => {
        this.cRW(this.rewardedUnit, (success) => {
          if (!success) {
            this.showRegularAds();
            resolve({ available: false, reason: "no_inventory" });
          } else {
            resolve({ available: true });
          }
        });
      });
    });
  }

  /**
   * Exibe anúncio Rewarded
   */
  showRewarded(callback) {
    if (!this.rewardedReady || !this.makeRewardedVisible) return false;
    
    this.rewardedCallback = callback;
    
    googletag.cmd.push(() => {
      try {
        this.makeRewardedVisible();
        return true;
      } catch (e) {
        console.error("Erro ao exibir rewarded:", e);
        return false;
      }
    });
    
    return true;
  }

  /**
   * Verifica se rewarded está pronto
   */
  isRewardedReady() {
    return this.rewardedReady && this.makeRewardedVisible !== null;
  }

  /**
   * Verifica rewarded e faz fallback se necessário
   */
  checkRewardedAndFallback() {
    if (!this.rewardedReady || !this.makeRewardedVisible) {
      this.showRegularAds();
      return false;
    }
    return true;
  }

  /**
   * Exibe anúncios regulares (fallback quando rewarded não disponível)
   */
  showRegularAds() {
    if (this.regularAdsLoaded) return;
    this.regularAdsLoaded = true;
    
    if (!this.isRewardedMode) return;
    
    // Filtra units regulares (sem rewarded)
    const units = this.gFAU().filter(u => u.t !== "rewarded");
    const priorityMap = {
      "top": 1,
      "interstitial": 2,
      "anchor": 3,
      "content": 4,
      "sidebar": 5
    };
    
    const sortedUnits = units.sort((a, b) => 
      (priorityMap[a.t] || 99) - (priorityMap[b.t] || 99)
    );
    
    sortedUnits.forEach(unit => this.cS(unit));
    
    googletag.cmd.push(() => this.sGPT());
  }

  /**
   * Cria slot Rewarded (cRW = Create Rewarded)
   */
  cRW(unit, callback) {
    let path;
    
    // Monta path do ad unit
    if (unit.customPath) {
      path = "/" + CONFIG.g + "/" + unit.customPath;
    } else {
      const parts = [CONFIG.p];
      unit.v && parts.push(unit.v);
      (unit.s !== "all" && unit.s !== "direct") && parts.push(unit.s);
      (unit.c && unit.c !== "all") && parts.push(unit.c);
      parts.push("mobile" === this.device ? "mob" : "desk");
      parts.push("rewarded");
      path = "/" + CONFIG.g + "/" + parts.join("_");
    }
    
    // Define slot out-of-page REWARDED
    const slot = googletag.defineOutOfPageSlot(
      path,
      googletag.enums.OutOfPageFormat.REWARDED
    );
    
    if (!slot) {
      callback({ available: false, reason: "no_slot" });
      return;
    }
    
    // Aplica preço
    const price = unit.pr || this.gP("rewarded", path);
    price && slot.setTargeting(CONFIG.pk || "ddmp_price", price);
    
    slot.addService(googletag.pubads());
    this.rewardedSlot = slot;
    
    // Aplica targeting de UTMs
    Object.entries(this.utms).forEach(([key, value]) => {
      if ("direct" !== value) googletag.pubads().setTargeting(key, value);
    });
    googletag.pubads().setTargeting("geo", this.geo);
    
    let hasResponded = false;
    
    // Listener: quando rewarded está pronto
    googletag.pubads().addEventListener("rewardedSlotReady", (event) => {
      if (!hasResponded) {
        hasResponded = true;
        this.makeRewardedVisible = event.makeRewardedVisible;
        this.rewardedReady = true;
        callback({ available: true });
      }
    });
    
    // Listener: quando slot renderiza vazio (sem inventory)
    googletag.pubads().addEventListener("slotRenderEnded", (event) => {
      if (event.slot === slot && event.isEmpty && !hasResponded) {
        setTimeout(() => {
          if (!this.rewardedReady) {
            hasResponded = true;
            this.showRegularAds();
            callback({ available: false, reason: "no_inventory" });
          }
        }, 10);
      }
    });

    googletag.pubads().addEventListener("rewardedSlotClosed", (event) => {
      console.log("[DDMPAds] rewardedSlotClosed disparado");
      console.log("[DDMPAds] Usuário fechou/completou o rewarded");
  
      this.rewardedReady = false;
      this.makeRewardedVisible = null;
      this.rewardedInitialized = false;
    
      this.setCookie("rewarded_shown", "1", 1);
      console.log("[DDMPAds] Cookie rewarded_shown setado");
      console.log("[DDMPAds] Cookie 'rewarded_shown' setado");
  
     // FECHAR TODOS OS MODAIS EXPLICITAMENTE
      if (window.DefaultModal && window.DefaultModal.modal) {
        console.log("[DDMPAds] Fechando DefaultModal");
      try {
        window.DefaultModal.close();
      } catch (e) {
        console.error("[DDMPAds] Erro ao fechar DefaultModal:", e);
      }
    }
  
    // FECHAR MODAL CUSTOMIZADO SE EXISTIR
    const customModalSlug = window.ModalLoader?.matchedModalId;
    if (customModalSlug && window.DDMPADS_MODALS && window.DDMPADS_MODALS[customModalSlug]) {
      const customModal = window.DDMPADS_MODALS[customModalSlug];
      if (customModal.modal && customModal.close) {
      console.log("[DDMPAds] Fechando modal customizado:", customModalSlug);
        try {
          customModal.close();
        } catch (e) {
          console.error("[DDMPAds] Erro ao fechar modal customizado:", e);
        }
      }
    }
  
    // GARANTIR QUE SCROLL ESTÁ LIBERADO (força)
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.overflow = "";
    console.log("[DDMPAds] Scroll liberado forçadamente");
  
    // CRUCIAL: CARREGAR ANÚNCIOS REGULARES
    console.log("[DDMPAds] Carregando anúncios regulares após rewarded");
    this.showRegularAds();
  });
    
    googletag.pubads().enableSingleRequest();
    googletag.enableServices();
    googletag.display(slot);
  }

  /**
   * gFAU = Get Filtered Ad Units
   * Retorna ad units filtradas pelo contexto atual (device, geo, source, path)
   */
  gFAU() {
    const decoder = new UD(AD_UNITS);
    const data = decoder.rebuildDevice(this.device);
    const u = data;
    const result = new Map();
    
    if (!u || !u.a) return [];
    
    const s = this.source;
    const g = this.geo.toLowerCase();
    const p = this.path;
    
    // 1. Busca por página exata (byPage)
    if (u.bp && u.bp[p]) {
      u.bp[p].forEach(unit => {
        if (
          (!unit.s || unit.s === "all" || unit.s === s) &&
          (!unit.c || unit.c === "all" || unit.c === g)
        ) {
          result.set(unit.t, unit);
        }
      });
    }
    
    // 2. Busca por pattern (regex) se ainda não tiver 5 types
    if (result.size < 5 && u.pt) {
      for (let i = 0; i < u.pt.length && result.size < 5; i++) {
        const unit = u.pt[i];
        if (
          new RegExp(unit._regex).test(p) &&
          (!unit.s || unit.s === "all" || unit.s === s) &&
          (!unit.c || unit.c === "all" || unit.c === g) &&
          (!result.has(unit.t) || result.get(unit.t)._score < unit._score)
        ) {
          result.set(unit.t, unit);
        }
      }
    }
    
    // 3. Busca fallback por chave composta (byKey) para types faltantes
    const missingTypes = ["top", "content", "sidebar", "anchor", "interstitial"]
      .filter(t => !result.has(t));
    
    if (missingTypes.length && u.bk) {
      const keys = [
        `${s}|${g}|`,
        `all|${g}|`,
        `${s}|all|`,
        `all|all|`
      ];
      
      for (const type of missingTypes) {
        for (const key of keys) {
          const units = u.bk[key + type];
          if (units && units[0]) {
            result.set(type, units[0]);
            break;
          }
        }
      }
    }
    
    // Retorna apenas units habilitadas
    return Array.from(result.values()).filter(unit => unit.e === true);
  }

  /**
   * cS = Create Slot
   * Cria um slot de anúncio no GPT
   */
  cS(unit) {
    googletag.cmd.push(() => {
      let path;
      
      // Monta path do ad unit
      if (unit.customPath) {
        path = "/" + CONFIG.g + "/" + unit.customPath;
      } else {
        const parts = [CONFIG.p];
        unit.v && parts.push(unit.v);
        (unit.s !== "all" && unit.s !== "direct") && parts.push(unit.s);
        (unit.c && unit.c !== "all") && parts.push(unit.c);
        parts.push("mobile" === this.device ? "mob" : "desk");
        parts.push(unit.t);
        path = "/" + CONFIG.g + "/" + parts.join("_");
      }
      
      let slot;
      
      // Define slot (out-of-page ou normal)
      if (unit.oop) {
        const format = "interstitial" === unit.t
          ? googletag.enums.OutOfPageFormat.INTERSTITIAL
          : googletag.enums.OutOfPageFormat.BOTTOM_ANCHOR;
        slot = googletag.defineOutOfPageSlot(path, format);
      } else {
        slot = googletag.defineSlot(path, unit.sz, unit.di);
      }
      
      if (slot) {
        // Aplica preço
        const price = unit.pr || this.gP(unit.t, path);
        price && slot.setTargeting(CONFIG.pk || "ddmp_price", price);
        
        slot.addService(googletag.pubads());
        
        this.slots.push({
          slot: slot,
          unit: unit,
          finalPath: path
        });
        
        // Adiciona a refreshableSlots se não for nr (no-refresh)
        unit.nr || this.refreshableSlots.push(slot);
      }
    });
  }

  /**
   * gP = Get Price
   * Obtém preço para um ad unit baseado em regras
   */
  gP(type, path) {
    const cacheKey = `${type}|${path}`;
    if (this.priceCache.has(cacheKey)) {
      return this.priceCache.get(cacheKey);
    }
    
    const unitName = path.split("/").pop();
    const device = this.device;
    const geo = this.geo.toLowerCase();
    const source = this.source === "direct" ? "*" : this.source;
    const currentPath = this.path;
    const tree = PRICE_RULES.tree;
    
    let price = null;
    
    // Busca na árvore (tree) com prioridade
    if (tree && tree[device] && tree[device][unitName]) {
      const geos = [geo, "*"];
      const sources = [source, "*"];
      const paths = [currentPath, "*"];
      
      outer: for (const g of geos) {
        if (!tree[device][unitName][g]) continue;
        for (const src of sources) {
          if (!tree[device][unitName][g][src]) continue;
          for (const pth of paths) {
            if (tree[device][unitName][g][src][pth]) {
              price = tree[device][unitName][g][src][pth];
              break outer;
            }
          }
        }
      }
    }
    
    // Fallback para flat rules
    if (!price && PRICE_RULES.flat) {
      const flat = PRICE_RULES.flat;
      price = flat[`${unitName}|${geo}|${device}|${source}|${currentPath}`] ||
              flat[`${unitName}|${geo}|${device}|${source}|*`] ||
              flat[`${unitName}|${geo}|${device}|*|*`] ||
              flat[`${unitName}|*|${device}|*|*`] ||
              flat[`*|*|*|*|*`];
    }
    
    // Fallback para preço default
    price = price || CONFIG.dp || "1.00";
    
    this.priceCache.set(cacheKey, price);
    return price;
  }

  /**
   * sGPT = Setup Google Publisher Tag
   * Configura GPT e exibe anúncios
   */
  sGPT() {
    googletag.pubads().enableSingleRequest();
    googletag.pubads().enableLazyLoad({
      fetchMarginPercent: 200,
      renderMarginPercent: 100,
      mobileScaling: 2
    });
    
    // Aplica targeting de UTMs
    Object.entries(this.utms).forEach(([key, value]) => {
      if ("direct" !== value) {
        googletag.pubads().setTargeting(key, value);
      }
    });
    googletag.pubads().setTargeting("geo", this.geo);
    
    googletag.enableServices();
    
    const priorityMap = {
      "top": 1,
      "interstitial": 2,
      "anchor": 3,
      "content": 4,
      "sidebar": 5
    };
    
    // Ordena slots por prioridade e exibe
    this.slots
      .sort((a, b) => 
        (priorityMap[a.unit.t] || 99) - (priorityMap[b.unit.t] || 99)
      )
      .forEach(({ slot, unit }) => {
        if (unit.oop) {
          googletag.display(slot);
        } else {
          this.dWR(slot, unit.di); // Display When Ready
        }
      });
    
    // Configura refresh automático se habilitado
    if (CONFIG.refresh && CONFIG.refresh.enabled && this.refreshableSlots.length) {
      this.sR(); // Setup Refresh
    }
  }

  /**
   * dWR = Display When Ready
   * Exibe anúncio quando div está disponível no DOM
   */
  dWR(slot, divId) {
    if (document.getElementById(divId)) {
      googletag.display(divId);
      return;
    }
    
    // Observa DOM até div aparecer (max 10s)
    const observer = new MutationObserver((mutations, obs) => {
      if (document.getElementById(divId)) {
        googletag.display(divId);
        obs.disconnect();
      }
    });
    
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
    
    setTimeout(() => observer.disconnect(), 10000);
  }

  /**
   * sR = Setup Refresh
   * Configura refresh automático de anúncios
   */
  sR() {
    const { delay = 30, interval = 30, maxCount = 0 } = CONFIG.refresh;
    let count = 0;
    
    const doRefresh = () => {
      if (maxCount > 0 && ++count > maxCount) {
        return;
      }
      
      googletag.pubads().refresh(this.refreshableSlots);
      
      if (maxCount === 0 || count < maxCount) {
        setTimeout(doRefresh, interval * 1000);
      }
    };
    
    setTimeout(doRefresh, delay * 1000);
  }
}(function(){window.ddmpAds=new DDMPAds;ddmpAds.init();window.DDMPADS_DEBUG={CONFIG,AD_UNITS,PRICE_RULES,Utils,instance:ddmpAds,decoder:new UD(AD_UNITS),getAllUnits:function(device){const d=device||ddmpAds.device,dec=new UD(AD_UNITS);return dec.rebuildDevice(d).a||[]},isRewardedMode:()=>ddmpAds.isRewardedMode,rewardedStatus:()=>({ready:ddmpAds.rewardedReady,hasFunction:ddmpAds.makeRewardedVisible!==null,initialized:ddmpAds.rewardedInitialized})}})()
})();