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
    this.sideMenuOpen = false
  }

  open() {
    this.menuBtnTarget.classList.add('open')
    this.dropdownTarget.classList.add('open')
    this.sideMenuOpen = true
  }


}
