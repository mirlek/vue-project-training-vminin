<template>
  <nav class="navbar orange lighten-1">
      <div class="nav-wrapper">
        <div class="navbar-left">
          <a href="#" @click.prevent="barIsOpen()">
            <i class="material-icons black-text">dehaze</i>
          </a>
          <span class="black-text">{{dateFilter(new Date(), "datetime") }}</span>
        </div>

        <ul class="right hide-on-small-and-down">
          <li>
            <a
                class="dropdown-trigger black-text"
                href="#"
                data-target="dropdown"
                ref="dropdown"
            >
              USER NAME
              <i class="material-icons right">arrow_drop_down</i>
            </a>

            <ul id='dropdown' class='dropdown-content'>
              <li>
                <RouterLink to="/profile" class="black-text">
                  <i class="material-icons">account_circle</i>Профиль
                </RouterLink>
              </li>
              <li class="divider" tabindex="-1"></li>
              <li>
                <a href="#" class="black-text" @click.prevent="logout">
                  <i class="material-icons">assignment_return</i>Выйти
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>

export default {
  methods: {
        barIsOpen() {
            this.$emit("openClose", this.$emit("click"));
        },
        data: () => ({
    date: new Date(),
    dropdown: null,
  }),
  dateFilter(value, format = 'date') {
  const options = {}

  if (format.includes('date')) {
    options.day = '2-digit'
    options.month = 'long'
    options.year = 'numeric'
  }

  if (format.includes('time')) {
    options.hour = '2-digit'
    options.minute = '2-digit'
    options.second = '2-digit'
  }

  return new Intl.DateTimeFormat('ru-RU', options).format(new Date(value))
},
        async logout() {
          console.log("LoGOUT")
          await this.$store.dispatch('logout')
          this.$router.push('/login?message=logout')
        }
    },
    mounted() {
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: false
    })
  }
}
</script>