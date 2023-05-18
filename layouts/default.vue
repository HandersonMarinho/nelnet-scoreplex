<template>
  <div>
    <div class="wrapper">
      <!-- MENU LATERAL -->
      <div class="sidebar" data-color="white" data-active-color="danger">
        <div class="logo">
          <a href="/home" class="simple-text logo-mini">
            <div class="logo-image-small">
              <!-- <img src="/assets/img/logo-small.png" /> -->
              <b>M</b>
            </div>
          </a>
          <nuxt-link to="/home" class="simple-text logo-normal">MIDOBANK</nuxt-link>
        </div>
        <div class="sidebar-wrapper">
          <div class="user">
            <div class="photo">
              <img v-bind:src="loggedInUser.img" />
            </div>
            <div class="info">
              <a data-toggle="collapse" class="collapsed">
                <span>
                  <span v-if="isAuthenticated">{{loggedInUser.nome.split(' ')[0]}}</span>
                  <b class="caret d-none"></b>
                </span>
              </a>
              <div class="clearfix"></div>
              <div class="collapse" id="collapseExample">
                <ul class="nav">
                  <li>
                    <a href="#">
                      <span class="sidebar-mini-icon">MP</span>
                      <span class="sidebar-normal">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="sidebar-mini-icon">EP</span>
                      <span class="sidebar-normal">Edit Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="sidebar-mini-icon">S</span>
                      <span class="sidebar-normal">Settings</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul class="nav">
            <li class="active">
              <nuxt-link to="/home">
                <i class="fas fa-home"></i>
                <p>Home</p>
              </nuxt-link>
            </li>
            <!-- <li>
              <nuxt-link to="/dashboard">
                <i class="fas fa-chart-pie"></i>
                <p>Indicadores</p>
              </nuxt-link>
            </li> -->
            <li>
              <nuxt-link to="/vencimento">
                <i class="fa fa-dollar-sign"></i>
                <p>Vencimentos</p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/anotacoes">
                <i class="fas fa-comments"></i>
                <p>Anotações</p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/emprestimo">
                <i class="fas fa-file-invoice-dollar"></i>
                <p>Empréstimos</p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/investidor">
                <i class="fas fa-piggy-bank"></i>
                <p>Investidores</p>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/cliente">
                <i class="fas fa-user"></i>
                <p>Clientes</p>
              </nuxt-link>
            </li>            
           <li>
             <hr class="ml-3 mr-3"/>
              <nuxt-link to="/configuracao">
                <i class="fas fa-cog"></i>
                <p>Configurações</p>
              </nuxt-link>
            </li>            
            <li>
              <a v-on:click="logout">
                <i class="fas fa-times"></i>
                <p>Sair</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="main-panel">
        <!-- TOP BAR -->
        <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
          <div class="container-fluid">
            <div class="navbar-wrapper">
              <div class="navbar-minimize">
                <button id="minimizeSidebar" class="btn btn-icon btn-round">
                  <i class="nc-icon nc-minimal-right text-center visible-on-sidebar-mini"></i>
                  <i class="nc-icon nc-minimal-left text-center visible-on-sidebar-regular"></i>
                </button>
              </div>
              <div class="navbar-toggle">
                <button type="button" class="navbar-toggler">
                  <span class="navbar-toggler-bar bar1"></span>
                  <span class="navbar-toggler-bar bar2"></span>
                  <span class="navbar-toggler-bar bar3"></span>
                </button>
              </div>
              <a class="navbar-brand" href="#">{{pageTitle}}</a>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-bar navbar-kebab"></span>
              <span class="navbar-toggler-bar navbar-kebab"></span>
              <span class="navbar-toggler-bar navbar-kebab"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navigation">
              <form class="d-none">
                <div class="input-group no-border">
                  <input type="text" value class="form-control" placeholder="Pesquisar..." />
                  <div class="input-group-append">
                    <div class="input-group-text">
                      <i class="nc-icon nc-zoom-split"></i>
                    </div>
                  </div>
                </div>
              </form>
              <money_visibility />
              <!-- 
              TODO: Remover esse link
              <nuxt-link class to="/pendencia">
                <span class="badge badge-danger mr-2 mt-2">
                  <i class="fas fa-exclamation-triangle text-light"></i>
                  Pendências {{totalPendencia}}
                </span>
              </nuxt-link> -->
              <form class="ml-3">
                <select class="form-control" v-on:change="gotoAcao()" v-model="selectedAcao">
                  <option value selected>Ações Rápidas</option>
                  <option value="/emprestimo-novo">Novo Empréstimo</option>
                  <option value="/investidor-novo">Novo Investidor</option>
                  <option value="/cliente-novo">Novo Cliente</option>                  
                </select>
              </form>
            </div>
          </div>
        </nav>
        <!-- CONTEUDO -->
        <div class="content text-secondary">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import money_visibility from "@/components/money-visibility";

export default {
  components: {
    money_visibility
  },

  computed: {
    ...mapGetters([
      "isAuthenticated",
      "loggedInUser",
      "pageTitle",
      "totalPendencia"
    ])
  },

  data() {
    return {
      selectedAcao: ""
    };
  },

  asyncData({ $axios, route }) {
    //    
  },

  mounted() {    
    this.checkMenuSelecionado();
    this.getTotalPendencias();
    this.verifyResolucaoMonitor();
  },

  methods: {

    //
    // Recupera o total de pendencias ativas no sistema e seta o valor na store para utilização offline.
    //
    getTotalPendencias() {
      this.$axios.get("/emprestimo/pendencia/count").then(res => {
        this.$store.commit("totalPendencia", res.data);
      });
    },

    //
    // Desloga o usuário do sistema e limpa o token de acesso do cache.
    //
    async logout() {
      await this.$auth.logout();
      this.$axios.setToken(false);
      this.$router.push("/");
    },

    //
    // Assim que um item do menu principal é selecionado, altera o estilo css para deixar o elemento
    // marcado como selecionado.
    //
    checkMenuSelecionado() {
      let menuItemSelector = ".sidebar-wrapper .nav li";
      $(menuItemSelector).click(function(e) {
        $(menuItemSelector).removeClass("active");
        let menuItem = $($(e.currentTarget)[0]);
        menuItem.addClass("active");
      });
    },

    //
    // Redireciona a aplicação para a pagina da ação selecionada na combo de ações rápidas.
    //
    gotoAcao() {
      this.$router.push(this.selectedAcao);
      this.selectedAcao = "";
    },

    //
    // Verifica a resolução do monitor, se menor que 1366 o menu deve ser recolhido.
    //
    verifyResolucaoMonitor() {
      if ($(window).width() <= 1366) {
        $("body").addClass("sidebar-mini");
      }
    }
  }

};
</script>