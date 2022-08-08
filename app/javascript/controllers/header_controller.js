import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navbar", "mobileDropdown", "nav"]

  connect() {
    console.log(this.hasNavbarTarget)
    window.addEventListener('scroll', (e) => this.handleScroll(e))
  }

  handleScroll(e) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if ((scrollTop > this.lastScrollTop) && !this.mobileDropdownTarget.classList.contains('open')) {
      this.navbarTarget.classList.remove('top-0')
      this.navbarTarget.classList.add('top-[-100px]')
    } else {
      this.navbarTarget.classList.remove('top-[-100px]')
      this.navbarTarget.classList.add('top-0')
    }

    if (scrollTop > 30) {
      this.navbarTarget.classList.add('shadow-lg')
      this.navbarTarget.classList.remove('py-2')

    } else {
      this.navbarTarget.classList.remove('shadow-lg')
      this.navbarTarget.classList.add('py-2')
    }
    this.lastScrollTop = scrollTop
  }
}
