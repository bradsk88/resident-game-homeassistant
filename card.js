class ResidentCard extends HTMLElement {
    set hass(hass) {
      if (!this.content) {
        const card = document.createElement('ha-card');
        card.header = 'Resident';
        this.content = document.createElement('div');
        this.content.style.padding = '0 16px 16px';
        card.appendChild(this.content);
        this.appendChild(card);
      }
  
      const entityId = this.config.entity;
      const state = hass.states[entityId];
      const stateStr = state ? state.state : 'unavailable';
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://drive.google.com/uc?export=view&id=1XOn3wMyUOPvL8PxXpk_eFDlutIPi75zv';
      document.head.appendChild(script);    
      const target = this.content;
      script.onload = function() {
        window.Resident.container = target;
        window.Resident.embed('/home/bradsk88/WebstormProjects/resident/dist/');
      };
    }
  
    setConfig(config) {
      if (!config.entity) {
        throw new Error('You need to define an entity');
      }
      this.config = config;
    }
  
    // The height of your card. Home Assistant uses this to automatically
    // distribute all cards over the available columns.
    getCardSize() {
      return 3;
    }
  }
  
  customElements.define('custom-resident-game-card', ResidentCard);