import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["dropdown", "menuBtn"]

  connect() {
    this.sideMenuOpen = false
    this.shopDropdownOpen = false
  }

  toggleMenuDropdown(e) {
    e.stopPropagation()
    if (this.sideMenuOpen) {
      this.hide()
    } else {
      this.open()
    }
  }

  hide() {
    if (this.hasDropdownTarget)
      this.menuBtnTarget.classList.remove('open')
      this.dropdownTarget.classList.remove('open')
    // this.dropdownTarget.classList.add('hidden')
    this.sideMenuOpen = false
    let fadeInElements = document.getElementsByClassName('side-menu-fade-in')
    for (let i = 0; i < fadeInElements.length; i++) {
      let el = fadeInElements[i]
      el.classList.remove('appear')
    }
    this.dropdownTarget.classList.remove('border-t', 'max-h-[3000px]')
    this.dropdownTarget.classList.add('max-h-0')
  }

  open() {
    let fadeInElements = document.getElementsByClassName('side-menu-fade-in')
    for (let i = 0; i < fadeInElements.length; i++) {
      let el = fadeInElements[i]
      el.classList.add('appear')
    }
    this.menuBtnTarget.classList.add('open')
    this.dropdownTarget.classList.add('open')
    // this.dropdownTarget.classList.remove('hidden')
    this.dropdownTarget.classList.remove('max-h-0')
    this.dropdownTarget.classList.add('border-t', 'max-h-[3000px]')

    this.sideMenuOpen = true
  }


}
