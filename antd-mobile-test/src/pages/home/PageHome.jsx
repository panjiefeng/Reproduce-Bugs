require('./PageHome.less');
import logic from './PageLogic';
import { Control, Route } from 'react-keeper';
import { Component, LogicRender } from 'refast';

import TabBar, { activeTabbar } from 'components/card-tabbar';
import { Drawer, List, NavBar, Icon } from 'antd-mobile';


class Home extends Component {
    constructor(props) { super(props, logic);        
        this.handleChange = this.handleChange.bind(this);
        this.state={
            open:false
        };
    }

    handleChange(key){
        this.dispatch('setTabbarIndex',key);
        Control.go(this.state.menu[key].path, ); // keeper的跳转
    }
    onOpenChange = (...args) => {
        console.log(args);
        this.setState({ open: !this.state.open });
      }
    render() {
        const sidebar = (<List>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i, index) => {
              if (index === 0) {
                return (<List.Item key={index}
                  thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                  multipleLine
                >Category</List.Item>);
              }
              return (<List.Item key={index}
                thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              >Category{index}</List.Item>);
            })}
          </List>);
      
          return (<div>
            <NavBar icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>Basic</NavBar>
            <Drawer
              className="my-drawer"
              style={{ minHeight: document.documentElement.clientHeight }}
              enableDragHandle
              contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
              sidebar={sidebar}
              open={this.state.open}
              onOpenChange={this.onOpenChange}
            >
              Click upper-left corner
            </Drawer>
          </div>);
    }

    componentDidMount() {
        dd.biz.navigation.setTitle({ title:'Home' })
    }

}

export default Home ;
