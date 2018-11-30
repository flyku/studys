/***react学习 */


1,组件名称必须首字母大写，为了和dom元素区分
2，警告:组件的返回值只能有一个根元素。这也是我们要用一个<div>来包裹所有<Welcome />元素的原因
3， ReactDOM.render只更新需要更新，不会全部刷新dom

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const element = <Welcome name="Sara" />;
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
当React遇到的元素是用户自定义的组件，它会将JSX属性作为单个对象传递给该组件，这个对象称之为“props”


state和props之间最重要的区别是props是从父组件传递的，而state是由组件本身管理的。----------------重要----------------------------------
组件不能改变其props，但可以改变state。
对于每一个特定的变化数据，应该只有一个“拥有”它的状态的组件。
不要尝试同步两个不同组件的状态。状态分享通过状态提升至最近的父组件来完成，并通过props传递给他们 
通过使用this.setState()。 只有定义为类的组件才可以具有状态。



srate
正确地使用状态
例如，此代码不会重新渲染组件：不要直接更新状态
1、// Wrong
    this.state.comment = 'Hello';
    // Correct
    this.setState({comment: 'Hello'});
    构造函数是唯一能够初始化 this.state 的地方。
2、状态更新可能是异步的
    // Wrong
    this.setState({
        counter: this.state.counter + this.props.increment,
    });
    要修复它，请使用第二种形式的 setState() 来接受一个函数而不是一个对象。
    该函数将接收先前的状态作为第一个参数，将此次更新被应用时的props做为第二个参数：----------------重要----------------------------------
    // Correct
    this.setState((prevState, props) => ({
        counter: prevState.counter + props.increment
    }));

3、这通常被称为自顶向下或单向数据流。 
任何状态始终由某些特定组件所有，并且从该状态导出的任何数据或 UI 只能影响树中下方的组件。



4、事件处理

    1、React事件绑定属性的命名采用驼峰式写法，而不是小写。
    2、如果采用 JSX 的语法你需要传入一个函数作为事件处理函数，而不是一个字符串(DOM元素的写法)
    //html
    <button onclick="activateLasers()">
        Activate Lasers
    </button>
    //react
    <button onClick={activateLasers}>
        Activate Lasers
    </button>
    在 React 中另一个不同是你不能使用返回 false 的方式阻止默认行为。
    你必须明确的使用 preventDefault。例如，传统的 HTML 中阻止链接默认打开一个新页面，你可以这样写：
    <a href="#" onclick="console.log('The link was clicked.'); return false">
        Click me
    </a>
    function ActionLink() {
        function handleClick(e) {
          e.preventDefault();//在这里，e 是一个合成事件。React 根据 W3C spec 来定义这些合成事件，所以你不需要担心跨浏览器的兼容性问题。
          console.log('The link was clicked.');
        }
      
        return (
          <a href="#" onClick={handleClick}>
            Click me
          </a>
        );
    }

5、列表渲染
    必须每个列表元素分配一个 key 来解决上面的那个警告

6、如果没有子代，你还可以使用自闭合标签，比如：
    <div className="sidebar" />
7、如果你没有给属性传值，它默认为 true。因此下面两个 JSX 是等价的
    MyTextBox autocomplete />
    <MyTextBox autocomplete={true} />