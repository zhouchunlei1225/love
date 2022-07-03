module.exports = {
  title: 'Vue Element Admin',

  /**
   * @type {boolean} true | false
   * @description 是否显示设置右侧面板
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description 是否需要tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description 是否在侧边栏中显示标志
   */
  sidebarLogo: false,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description 需要显示错误日志组件。
   * 他的默认值仅用于生产环境
   * 如果你还想在 dev 中使用它，你可以通过 ['production', 'development']
   */
  errorLog: ['production', 'development']
}
