module NavigationHelper
  def navigation_links
    [
      { title: 'Home', url: root_path(anchor: 'home'), active: current_page?(root_path) },
      { title: 'About', url: root_path(anchor: 'about'), active: false },
      { title: 'Projects', url: root_path(anchor: 'projects'), active: false },
      { title: 'Contact', url: root_path(anchor: 'contact'), active: false }
    ]
  end
end
