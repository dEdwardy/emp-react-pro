import {Layout, Menu, Breadcrumb, Dropdown} from 'antd'
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons'
import {Route, useHistory, Switch} from 'react-router-dom'
import React, {useState, lazy, Suspense, useMemo} from 'react'
import {actions} from '../../store/user'
import {useDispatch} from 'react-redux'
import './Home.scss'

const {SubMenu} = Menu
const {Header, Content, Footer, Sider} = Layout
export function Home(props) {
  const history = useHistory()
  const token = localStorage.getItem('token')
  if (!token) {
    history.replace('/login')
  }
  const [openKeys, setOpenKeys] = useState([])
  const dispatch = useDispatch()
  const User = lazy(() => import('../User/User'))
  const Category = lazy(() => import('../Category/Category'))
  const Tag = lazy(() => import('../Tag/Tag'))
  const Ad = lazy(() => import('../Ad/Ad'))
  const Article = lazy(() => import('../Article/Article'))
  const ArticleDetail = lazy(() => import('../Article/ArticleDetail'))
  const innerRoute = [
    {
      path: '/user',
      component: User,
    },
    {
      path: '/category',
      component: Category,
    },
    {
      path: '/tag',
      component: Tag,
    },
    {
      path: '/article',
      component: Article,
    },
    {
      path: '/article/:id',
      component: ArticleDetail,
    },
    {
      path: '/ad',
      component: Ad,
    },
  ]
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const innerRouteView = useMemo(() => {
    return innerRoute.map(item => {
      return <Route key={item.path} exact path={item.path} component={item.component} />
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history.location.pathname])
  // const innerRoute = [
  //   {
  //     path: '/user',
  //   },
  //   {
  //     path: '/category',
  //   },
  //   {
  //     path: '/tag',
  //   },
  //   {
  //     path: '/article',
  //   },
  //   {
  //     path: '/article/:id',
  //   },
  //   {
  //     path: '/ad',
  //   },
  // ]

  const rootSubmenuKeys = ['1', '2', '3', '4', '5']

  const onOpenChange = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1)
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  const handleSelect = ({key}) => {
    history.push(key)
  }
  const handleClickMenu = ({key}) => {
    switch (key) {
      case 'c':
        localStorage.removeItem('token')
        dispatch(actions.setUserInfo({}))
        history.push('/login')
        break
      default:
        break
    }
    console.error(key)
  }
  const menu = (
    <Menu onClick={handleClickMenu}>
      <Menu.Item key="a">aaaaaaaa</Menu.Item>
      <Menu.Item key="b">bbbbbbb</Menu.Item>
      <Menu.Item key="c">Log out</Menu.Item>
    </Menu>
  )

  return (
    <Layout className="home">
      <Header className="header" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div className="logo">JJ Manage</div>
        <div className="avatar">
          <Dropdown overlay={menu}>
            <img className="img" src="http://edw4rd.cn/assets/avatar.jpg" />
          </Dropdown>
        </div>
      </Header>
      <Content style={{padding: '0 50px', height: 'calc(100vh - 64px - 70px)'}}>
        <Breadcrumb style={{marginTop: '12px'}}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{padding: '12px 0', height: 'calc(100% - 12px)'}}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              openKeys={openKeys}
              onOpenChange={onOpenChange}
              onSelect={e => handleSelect(e)}
              mode="inline"
              defaultSelectedKeys={[]}
              defaultOpenKeys={[]}
              style={{height: '100%'}}>
              <SubMenu key="1" icon={<UserOutlined />} title="????????????">
                <Menu.Item key="/user">????????????</Menu.Item>
              </SubMenu>
              <SubMenu key="2" icon={<LaptopOutlined />} title="????????????">
                <Menu.Item key="/article">????????????</Menu.Item>
              </SubMenu>
              <SubMenu key="3" icon={<NotificationOutlined />} title="????????????">
                <Menu.Item key="/category">????????????</Menu.Item>
              </SubMenu>
              <SubMenu key="4" icon={<NotificationOutlined />} title="????????????">
                <Menu.Item key="/tag">????????????</Menu.Item>
              </SubMenu>
              <SubMenu key="5" icon={<NotificationOutlined />} title="????????????">
                <Menu.Item key="/ad">????????????</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content
            style={{
              padding: '0 24px',
              minHeight: 280,
              overflow: 'auto scroll',
              height: '100%',
            }}>
            <Suspense fallback={<div>Loading...</div>}>
              <Switch>
                {/* {
                  innerRoute.map(item => {
                    return useMemo(
                      () => <Route key={item.path} exact path={item.path} component={item.component} />,
                      history.location.pathname,
                    )
                  })
                } */}
                {innerRouteView}
              </Switch>
            </Suspense>
          </Content>
        </Layout>
      </Content>
      <Footer style={{textAlign: 'center'}}>Ant Design ??2018 Created by Ant UED</Footer>
    </Layout>
  )
}
