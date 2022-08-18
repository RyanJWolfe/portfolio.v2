import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navbar", "mobileDropdown", "nav", "background"]

  connect() {
    this.handleScroll()
    window.addEventListener('scroll', (e) => this.handleScroll())
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

    if (scrollTop > 50) {
      this.navbarTarget.classList.remove('py-2', 'sm:py-4', 'bg-transparent')
      this.backgroundTarget.classList.remove('top-[-100px]')
      this.backgroundTarget.classList.add('top-0')
    } else {
      this.navbarTarget.classList.add('py-2', 'sm:py-4', 'bg-transparent')
      this.backgroundTarget.classList.remove('top-0')
      this.backgroundTarget.classList.add('top-[-100px]')
    }
    this.lastScrollTop = scrollTop
  }
}
