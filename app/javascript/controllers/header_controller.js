import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navbar", "mobileDropdown", "nav", "background"]

  connect() {
    window.addEventListener('scroll', (e) => this.handleScroll())
  }

  initialize() {
    this.handleScroll()

  }

  disconnect() {
    this.hide()
  }

  handleScroll() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    // if ((scrollTop > this.lastScrollTop) && !this.mobileDropdownTarget.classList.contains('open')) {
    //   this.navbarTarget.classList.remove('top-0')
    //   this.navbarTarget.classList.add('top-[-100px]')
    // } else {
    //   this.navbarTarget.classList.remove('top-[-100px]')
    //   this.navbarTarget.classList.add('top-0')
    // }

    if (scrollTop > 150) {
      this.show()
    } else {
      this.hide()
    }
    this.lastScrollTop = scrollTop
  }

  show() {
    this.navbarTarget.classList.remove('py-2', 'sm:py-4', 'bg-transparent')
    this.navbarTarget.classList.add('bg-nav')

    // this.backgroundTarget.classList.remove('top-[-70px]')
    // this.backgroundTarget.classList.add('top-0')
  }

  hide() {
    this.navbarTarget.classList.add('py-2', 'sm:py-4', 'bg-transparent')
    this.navbarTarget.classList.remove('bg-nav')
    // this.backgroundTarget.classList.remove('top-0')
    // this.backgroundTarget.classList.add('top-[-70px]')
  }
}
