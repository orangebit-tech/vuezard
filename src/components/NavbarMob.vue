<template>
  <div class="nav-mob">

  <header class="header">
    <nav class="header__nav">
      <ul class="header__navbar">
        <li class="header__item">
          <a href="#" class="header__link">
            <transition name="slide-fade">
              <!-- Header Navigation Menu Icons -->
              <button class="header--button" v-if="show" key="on" @click="show = false">
                <svg viewBox="0 0 24 24" class="header--icon">
                  <title>Close</title>
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path fill="currentColor" d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
                </svg>
              </button>
              <button class="header--button" v-else key="off" @click="show = true">
                <svg viewBox="0 0 24 24" class="header--icon">
                  <title>Navigation Menu</title>
                  <path fill="currentColor" d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z" />
                </svg>
              </button>
            </transition>
          </a>
          <!-- Dropdown Menu -->
          <transition name="dropdown">
            <div class="dropdown__menu" v-bind:class="{ active: show }" v-if="show">
              <ul class="dropdown__menu-nav">
                <li  @click="show=false"  v-for="(button, index) in buttons" :key="index" class="dropdown__menu-item">
                  <router-link :class="{'is-still-active': $route.path.includes(button.name.toLowerCase() + '/')}" :to="button.url" href="#" class="dropdown__menu-link">
                    <div class="dropdown__menu-svg">
                    </div>
                    <div class="dropdown__menu-text">{{button.name}}</div>
                  </router-link>
                </li>
              </ul>
            </div>
          </transition>
        </li>
      </ul>
    </nav>
  </header>

</div>
</template>
<script>
export default {
  name: 'NavbarMob',
  props: ['buttons'],
  data() {
    return {
      show: false,
    }
  }
}
</script>

<style lang="scss" scoped>
hr {
  border: 0;
  height: 0;
  margin: 1.5rem 0;
  border-top: 1px solid var(--color-gray);
}

// Header Menu

.header {
  padding: 1rem 3rem 1rem 5rem;
  &__nav {
    position: relative;
  }
  &__navbar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  &__item {
    padding: 1rem;
  }
  &--icon {
    width: 1.65rem;
    height: 1.65rem;
  }
  &--button {
    top: 0;
    right: 0;
    position: absolute;
    margin: 0;
    padding: 0;
    color: gray;
    cursor: pointer;
    border: 1px solid transparent;
    background-color: transparent;
    &:focus {
      outline: 0;
    }
  }
}

// Dropdown Menu

.dropdown__menu {
  opacity: 0.9;
  top: 100%;
  right: 0;
  position: absolute;
  z-index: 10;
  height: 25rem;
  min-width: 300px;
  margin-top: 1rem;
  overflow-y: auto;
  padding: 2rem 1rem 2rem 0rem;
  border-radius: 12px;
  background-color: #0B0C10;
  border: 1px solid var(--color-gray);
  background-clip: padding-box;
  &-link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-decoration: none;
    color: white;
    padding: 0.8rem 0 0.8rem 2rem;
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    border-radius: 0 50px 50px 0;
    &:hover {
      color: #66FCF1;
      
    }
  }
  &-svg {
    width: 1.5rem;
    height: 1.5rem;
  }
  &-text {
    font-size: 18px;
    font-weight: 500;
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

// Animation Menu Icon

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.6s;
}
.slide-fade-enter,
.slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(31px);
}
.slide-fade-leave-active {
  transform: translateX(-31px);
}

// Dropdown Menu Animation

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 1s;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

// Wrapper

.main {
  border: 1px solid white;
  margin: 6rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__subtitle {
    color: #4f5959;
    font-weight: 100;
    margin-bottom: 2rem;
  }
  &__link {
    margin-right: 1.5rem;
    display: inline-block;
    &:last-child {
      margin-right: 0;
    }
  }
  &__svg {
    width: 2rem;
    height: 2rem;
    opacity: 0.6;
    color: #94a2b0;
    &:hover {
      color: #ffad1f;
    }
  }
}
</style>