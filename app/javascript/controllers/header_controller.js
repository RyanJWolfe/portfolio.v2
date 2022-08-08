import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navbar", "mobileDropdown"]

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
    this.lastScrollTop = scrollTop
  }
}
