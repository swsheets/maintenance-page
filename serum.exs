%{
  site_name: "SWSheets Maintenance",
  site_description: "SWSheets is a community for creating, managing, and sharing your characters for Fantasy Flight Games' Star Wars role-playing game.",
  date_format: "{WDfull}, {D} {Mshort} {YYYY}",
  base_url: "/",
  author: "SWSheets Team",
  author_email: "swsheets@swsheets.com",
  plugins: [
    {Serum.Plugins.LiveReloader, only: :dev}
  ]
}
