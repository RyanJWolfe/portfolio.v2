import { Controller } from "@hotwired/stimulus"
import { toggleTheme } from "helpers/toggle_theme";

export default class extends Controller {
  toggleTheme() {
    toggleTheme()
  }
}
