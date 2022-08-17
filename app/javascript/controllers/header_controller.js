import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["navbar", "mobileDropdown", "nav"]

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

    if (scrollTop > 30) {
      this.navbarTarget.classList.add('shadow-lg', 'bg-gradient-to-r', 'from-primary/[.2]', 'via-primary/[.15]', 'to-bg-base')
      this.navbarTarget.classList.remove('py-2', 'bg-transparent')

    } else {
      this.navbarTarget.classList.remove('shadow-lg', 'bg-gradient-to-r', 'from-primary/[.2]', 'via-primary/[.15]', 'to-bg-base')
      this.navbarTarget.classList.add('py-2', 'bg-transparent')
    }
    this.lastScrollTop = scrollTop
  }
}
