import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["dropdown", "menuBtn"]

  connect() {
    this.sideMenuOpen = false
    window.addEventListener('click', (e) => this.handleClick(e))

  }

  handleClick(e) {
    if (this.sideMenuOpen)
      this.hide()
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

    this.sideMenuOpen = false
  }

  open() {
    this.menuBtnTarget.classList.add('open')
    this.dropdownTarget.classList.add('open')

    this.sideMenuOpen = true
  }


}
