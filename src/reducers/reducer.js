import {
    ADD_Question,
    ADD_mcqList,
    SET_LangName,
    ADD_darkMode,
    SET_DialogOpen,
    SET_DialogQnAOpen,
    SET_queCount
  } from "../constants/action-types";
  
  const initialState = {
    question: [
      {
        qText: "What is Conditional rendering in ReactJS ?  ",
        image: "",
        lang: "React",
        code: ``,
        answer: `Conditional rendering comes into <b>picture when</b> we have to choose what to 
        render from different components. We mayneed to apply conditional rendering when<li> Fetching data 
        from servers and setting variables accordingly. </li> <li>Applying visible conditions on buttons/icons.</li> 
        <li>Handling user events </li> We can use javascript operators like 'if' and let React decide which component to render.`,
      },
      {
        qText:
          "How will you implement shouldComponentUpdate() like functionality in Functional Component? ",
        image: "",
        lang: "React",
        code: `
        // Only re-run the effect if UserId changes
        useEffect(() => {
          //code
        }, [userId]); 
  
        // Can pass multiple values. If any value changes, it will re-run effect.
        useEffect(() => {
          //code
        }, [userId , userName]); 
        `,
        answer: `<h3>shouldComponentUpdate(nextProps, nextState)</h3> <p>shouldComponentUpdate lifecycle method can be used in class components 
            to check if we need to re-render the component. This method checks the current and next state and props and if they are same,
            it will return false and if they are different it will return true. Defaults to true.</p>
            <p>We can use hooks in functional component to achieve react lifecycle methods. For shouldComponentUpdate we can use useEffect 
            hook. By default code written inside useEffect will render on every update/refresh. we can prevent this by passing value in 
            the array. The value will be the one by which components output is changing(value = state/props variables changing values). The 
            array will be passed as second argument to useEffect.</p>  
            <p>In the below code snippet, suppose userId is 100 initially and with next re-render it again remains 100, react will compare
            prev and next values and as they are same it will skip the useEffect. If value is different than 100, it will apply the effect.
            This is how shouldComponentUpdate like functionality can be achieved. </p>
          `,
      },
      {
        qText: "what is getSnapshotBeforeUpdate() method ?",
        image: "",
        lang: "React",
        code: ``,
        answer: ` <h3>getSnapshotBeforeUpdate(prevProps, prevState) : </h3> 
            getSnapshotBeforeUpdate() method belongs to the updation phase of component lifecycle. When the component is being re-rendered 
            due to any state/prop change, this method will be called just after the render() and before the dom is updated with most recent changes.
            Value returned by this method will be passed as parameter to componentDidUpdate() method. componentDidUpdate() gets called 
            after getSnapshotBeforeUpdate.
          `,
      },
      {
        qText: "Difference between Class component and Functional component?",
        image: "",
        lang: "React",
        code: `
        //Class Component
        class Tns extends React.Component {
          render() {
            return <p>Welcome, {this.props.userName}</p>;
          }
        }
  
        //Function Component
        function Tns(props) {
          return <p>Welcome, {props.userName}</p>;
        } `,
        answer: `
          In react , components are the building blocks of any application. components are designed for code reusability. 
          <h3>1. class Components :</h3> In react, class components let us use the lifecycle methods of react. Mounting ,updating and unmounting phases of components can be handled 
          efficiently in class components. Class components have their own state varibles declared in constructor. First letter of class component must always be capital. 
          They have render method which returns the html.Before Reacts version < 16.8, Class components were must to use if we need to manage the state and lifecycle methods 
          in the components. Now with version 16.8, we have hooks that let us have state inside functional components also.
          <h3>2. Function Components :</h3> Functional components are comparatively easy to code and handle. They are nothing but the javascript functions which return javascript xml.
          Functional component name must start with upper case letter. React version >= 16.8 has introduced hooks by using which we can have state inside the function components.
          we can use hooks to achieve react lifecycle-like functionality in functional components also.
          <h3>Difference :</h3>
          <table>
            <tr >
              <th style="border : 1px solid #dddddd">Class Component</th>
              <th style="border : 1px solid #dddddd">Functional Component</th>
            </tr>
            <tr>
              <td style="border : 1px solid #dddddd">They have their own state.</td>
              <td style="border : 1px solid #dddddd">Do not have state.(Can be achieved by using hooks)</td>
            </tr>
            <tr>
              <td style="border : 1px solid #dddddd">They extends from react component.Have render method which returns HTML.</td>
              <td style="border : 1px solid #dddddd">They are simple Javascript functions.Do not have render method.</td>
                </tr>
            <tr>
              <td style="border : 1px solid #dddddd">As they have their own state they are also known as stateful components.</td>
              <td style="border : 1px solid #dddddd">Functional components just accepts the props and render hence they are also called
              stateless components.</td>      
            </tr>
        </table>
          `,
      },
      // {
      //   qText: "When render method is triggered in Function Component?",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      {
        qText: "What is setState() method and why it is used ?  ",
        image: "",
        lang: "React",
        code: `
        //May cause ambiguity as like button gets clicked very frequently
        this.setState({likes:this.state.likes+1});
  
        //This makes sure to have correct value
        this.setState((prevState,props)=>{
              return {likes:prevState.likes+1};
           }
       );
        `,
        answer: `<p>In class components, we have state variables declared in the constructor. We can access them by this.state. When it comes to
          updation of state variables setState() comes into picture. setState() method updates the state value and re-renders the component.
          It is asynchronous in nature. </p>
          <p>One can update state variable by this.state.variable_name = UpdatedValue but it is always better to use setState for state
          updation because of re-rendering. This makes sure that component will always have the updated value. </p>
          <p>Re-rendering feature of setState may cause the problem like an infinite loop if it is used in wrong lifecycle methods. For example,
          if we tried to use setState in render(), it will trigger the re-render and will go in an infinite loop resulting in server crash.</p>
          <p>As said earlier setState is asynchronous in nature hence we can not be sure about this.state value which will be used inside setState
          method. For example, if we are having likes button which is getting clicked very frequently, we can not guarantee about the latest like count
          value. In such cases we can pass a callback function to setState which will be called after the state is updated and we will have 
          latest likes count value.  
          `,
      },
      {
        qText: "What is difference between == and === ? ",
        image: "",
        lang: "React",
        code: `
        var first = 1 ;
        var fourth = "1"
        var second = true;
        var third = true;
  
        console.log(first == second)  //true
        console.log(first===second)   //false
        console.log(first===fourth)   //false
        console.log(first==fourth)    //true
        `,
        answer: `<li> == is known as Equality operator whereas === is strict equality operator.</li><li> == operator does the type conversion 
          before comparison. === operator will not do the type conversion.</li> `,
      },
      {
        qText:
          "Difference between this.state.name = “abc” and this.setState({name:”Abc”}). When to use these two approaches?",
        image: "",
        lang: "React",
        code: ``,
        answer: `In both the cases we are trying to update the state variable <b>name</b> with value <b>abc</b>. As per the code in both the cases it will update 
          the state variable to abc but the key difference here is that when we use setState method it will make the component <b>re-render</b>.
          <br/>setState causes reconciliation that is it will re-render the component tree with the updated value. so if we are trying to update
          state by this.state , component will not have the updated state and hence it will lead to state inconsistency. It is always a best
          practice to use <b>setState</b> for state updation. `,
      },
      {
        qText:
          "How to handle multiple parallel API calls in ReactJS which are dependent on each other?",
        image: "",
        lang: "React",
        code: ``,
        answer: `
          <p>If result/output of first api call is needed as input to the next api call and so on, in such scenario we can use fetch method.
          In .then() of first fetch call , we can write next api call and chain it in similar way. We can use .catch() method to 
          handle erros.</p><p> If api are independent of each other we can also use Promise.all() to call apis simultaneously.</p>
          `,
      },
      {
        qText: "Difference between state and props?",
        image: "",
        lang: "React",
        code: ``,
        answer: `<b>State :</b> State is a javascript object which holds the data inside the component. In other words one can say state is a variable which carries the data 
          inside the component. It can not be accessed outside the component. State variables can be accessed by using this.state.<Variable_Name>. State variables
          can be modified by using this.setState(). <br/><br/>
  
          <b>props :</b> Props are also the objects which hold the data but unlike state, props can be shared between different components. In react everything is component
          and when we want to have communication between these components, we can use props. Props are read-only. Props are immutable so we can not modify props inside the 
          component.
          
          <h3>Difference  :</h3> 
                 <table>
            <tr >
              <th style="border : 1px solid #dddddd">State</th>
              <th style="border : 1px solid #dddddd">Props</th>
            </tr>
            <tr>
              <td style="border : 1px solid #dddddd">state is mutable.</td>
              <td style="border : 1px solid #dddddd">props are immutable</td>
            </tr>
            <tr>
              <td style="border : 1px solid #dddddd">state can not be accessed outside the componet.</td>
              <td style="border : 1px solid #dddddd">Props can be accessed outside the component.</td>
                </tr>
            <tr>
              <td style="border : 1px solid #dddddd">State can be used to share asynchronously updated data inside the component.</td>
              <td style="border : 1px solid #dddddd">Props are used to for data sharing between different components.</td>      
            </tr>
        </table>
          `,
      },
      {
        qText: "What is virtual DOM and how it works?",
        image: "",
        lang: "React",
        code: ``,
        answer: `<p>Let's first understand what dom is. Dom stands for Document Object Model. It represents the whole HTML document. You can say it 
          is representation of the applications user interface. Issue which we face with real dom is that dom manipulations are costly which
          affects performance. </p>\
          <p> React uses virtual dom to deal with this problem. As name suggests, virtual dom is the virtual representation of real dom.
          Virtual representation of UI is kept in memory and then it's synced with real dom. This is called as reconciliation</p>
          <p><b>How it works - </b> Whenever there is a state change in react component, now instead of directly changing the real dom completely,
          a new virtual dom tree is created. This newly created virtual dom tree is compared with the previous dom tree(before state updation).
          Next step will be to check which things(nodes) are updated. React will calculate the difference and now only updated nodes are 
          updated to real dom. This way virtual dom helps to improve the applications performance. </p>
  
          `,
      },
      // {
      //   qText: "What is HOC? Explain it with example?",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      {
        qText:
          "what are lifecycle methods of Components and order in which they are called ?",
        image: "",
        lang: "React",
        code: ``,
        answer: `Everything is component in react. Component lifecycle can be categorized into three phases as Mounting, Updating and Unmounting.
          <h3>Mounting Phase :</h3> 
          This is the initialization phase of the component. These methods are called in the below order when component instance is getting
          pushed to the dom.
          <li><b>Constructor() </b></li>
          <li><b>static getDerivedStateFromProps() </b></li>
          <li><b>render() </b></li>
          <li><b>componentDidMount() </b></li>
          <h3>Updating Phase :</h3> Whenever state or props data is changed, component is updated and re-rendered. While component is 
          re-rendering, these methods are called in the given order.
          <li><b>static getDerivedStateFromProps() </b></li>
          <li><b>shouldComponentUpdate() </b></li>
          <li><b>render() </b></li>
          <li><b>getSnapshotBeforeUpdate() </b></li>
          <li><b>componentDidUpdate() </b></li>
          <h3>Unmounting Phase :</h3> 
          This method is called when your component task is done and component is no more needs in the dom.
          <li><b>componentWillUnmount() </b></li>
          `,
      },
      {
        qText: "Types of Component?",
        image: "",
        lang: "React",
        code: `
        //Class Component
        class Tns extends React.Component {
          render() {
            return <p>Welcome, {this.props.name}</p>;
          }
        }
  
        //Function Component
        function Tns(props) {
          return <p>Welcome, {props.name}</p>;
        }
        `,
        answer: `In react , components are the building blocks of any application. components are designed for code reusability. 
           There are mainly two types of components
          1. class componens 2. function components. <br/>
          <h3>1. class Components :</h3> In react, class components let us use the lifecycle methods of react. Mounting, updating and unmounting phases of components can be handled 
          efficiently in class components. Class components have their own state variables declared in the constructor. First letter of class component must always be capital. 
          They have render method which returns the HTML.Before Reacts version < 16.8, Class components were must to use if we need to manage the state and lifecycle methods 
          in the components. Now with version 16.8 we have hooks which let us have state inside functional components also.
          <h3>2. Function Components :</h3> Functional components are comparatively easy to code and handle. They are nothing but the javascript functions which returns javascript xml.
          Functional component name must start with upper case letter. React version >= 16.8 has introduced hooks by using which we can have state inside the funcion components.
          we can use hooks to achieve react lifecycle like functionality in functional components also.
          <h3>3. Pure Components :</h3> 
          Class components that extend the React.PureComponent class are known as pure components. They have inbuild shouldComponentUpdate(nextstate, nextprops)
          method which helps for improving the 
          performance of the application. If the value of previous state and props is same as of the next state and props, shouldComponentUpdate(nextstate, nextprops) method will 
          return false and hence the pure component will not re-render. It will only re-render if the state and props data is updated to different values than previous which helps 
          to improve the applications performance. `,
      },
      // {
      //   qText: "Why we used spread operator in reducer functions?",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText:
      //     "How to implement API call in ReactJS? Hint: FETCH and Axios Library",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "Exception and Error handling in ReactJS?",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "What is ‘ref’ in react? What is forward refs?",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "What is context? Why to use context?",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "Data sharing mechanism in your current project?",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "Parallel API service calls?",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "Context VS Reduxrvice calls?",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "Explain bundling process",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "How user login is handled in your application?",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "React Unit Test cases. Hint: Jest Enzyme?",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "How will you catch mounting phase of function component? ",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "How to improve performance of ReactJS Application? ",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "Custom Hooks",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      {
        qText: "How asynchronous code executes in Javascript ? ",
        image: "",
        lang: "Javascript",
        code: ``,
        answer: `<p>Javascript is having only one call stack and one memory heap. It executes code in the order code is defined which means javascript
          is synchronous in nature. This synchronous nature may cause issues when we are fetching data from servers or using ajax calls. 
          </p><p>Callbacks or promises are used to handle such asynchronous behavior. Asynchronous operations like promises are kept in queue. 
          This event queue will run after the main thread has finished the processing(because javascript is single threaded). This will prevent
          any subsequent blockings. once the execution is completed promise will return the result to javascript environment.</p>`,
      },
      {
        qText: "Is javascript single threaded language? ",
        image: "",
        lang: "Javascript",
        code: ``,
        answer: `Yes, javascript is single threaded language as it has only one call stack. `,
      },
      // {
      //   qText: "What is difference between JavaScript and other languages? ",
      //   image: "",
      //   lang: "Javascript",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "What makes JavaScript language special? ",
      //   image: "",
      //   lang: "Javascript",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      {
        qText: " Difference between call, apply and bind?",
        image: "",
        lang: "Javascript",
        code: `
        //call()
          var TnsUser = {
          userName: function(age, gender) {
            return "Logged in as " + this.userName + " with age " + age + " and gender " + gender;
            }
          }
          var TnsUser_1 = {
           userName : "TnS_User"
          }
          console.log(TnsUser.userName.call(TnsUser_1, "25", "Male"));
        
          //apply()
          var TnsUser = {
            userName: function(age, gender) {
              return "Logged in as " + this.userName + " with age " + age + " and gender " + gender;
            }
          }
          var TnsUser_1 = {
           userName : "TnS_User"
          }
          console.log(TnsUser.userName.apply(TnsUser_1, ["25", "Male"]));	
        
          //bind()
            var TnsUser = {
              userName: function(age, gender) {
                return "Logged in as " + this.userName + " with age " + age + " and gender " + gender;
              }
            }
            var bindTns = TnsUser.userName.bind({userName : "bindTns_user"})
            console.log(bindTns("30","Male"));
        
        `,
        answer: `<h3>call() :</h3> 
          call() method is used to invoke the function with this value provided as first parameter and the arguments. call method accepts arguments individually/seperated by quama(","). 
          
          <h3>apply() :</h3> 
          Similar to call() method, apply() is also used to invoke the function with given this value. Only difference is apply method accepts arguments in an array.
        
          <h3>bind() :</h3> 
          bind() method binds the function with provided this value and the context. It will not invoke the function immediately after binding, for function invocation it needs to be 
          called seperately. It will return the new function. 
  
          <h3>Difference :</h3> 
            <li>call and apply do the same work of function invocation with only difference that call accepts arguments seperately whereas apply accepts arguments in an array.</li>
            <li>bind will return new function. call and apply do not return new function, they invoke the function depending upon the provided this value.</li>
            <li>call and apply will invoke function immediately , bind will not invoke function immediately.</li>
        `,
      },
      {
        qText: "Difference between callback and promise? ",
        image: "",
        lang: "Javascript",
        code: `
        //Callback
        function Tns(userName, callbackFun) {
          console.log('User Name -' + ' ' + userName);
          callbackFun();
        }
        function callbackFun() {
          console.log('I am TnS_User');
        }
        Tns('TnS_User', callbackFun);
  
  
        //Promise Syntax
        const TnsPromise = new Promise((resolve, reject) => {  
              // condition
          });
        `,
        answer: `
          <h3>callback :</h3> 
          callback is a function which is passed as an argument to another function and will be invoked when it match the conditions applied. callback functions are mainly used incase of
          asynchronous calls. when passing a function as an argument, make sure not to use parenthesis.
          
          <h3>promise : </h3>
          Promises provide cleaner way to handle the asynchronous operations. As the word promise suggest, it is either kept and fulfilled in future or it is broken. Promise in 
          javascript has three states - resolved,pending and rejected. 
        `,
      },
      {
        qText: "what are states of promises?",
        image: "",
        lang: "Javascript",
        code: ``,
        answer: `
          <h3>promise :</h3> 
            Promises provide cleaner way to handle the asynchronous operations. As per the word promise suggest, it is either kept and fulfilled in future or it is broken. Promise in 
                  javascript has three states - resolved, pending and rejected. <br/><br/>
            <li><b>Pending state :</b> After creating the promise, it will be in pending state before it is resolved or rejected. Example : When we post request to fetch data from server, it is in 
            pending state until it is received.</li>
            <li><b>Resolved :</b> Executed successfully. Example : Data requested from server is successfully received. You can use .then() for further execution.</li>
            <li><b>Rejected :</b> Execution failed. Example : Data is not received due to network error. You can use .catch() to handle this situation.</li>
      
          `,
      },
      {
        qText: "Difference between map and forEach , what is filter function ? ",
        image: "",
        lang: "Javascript",
        code: `
        //forEach
        var Language = ['React','Javascript','HTML','CSS'];
        Language.forEach(function(language){ console.log(language); 
        });
        
        //map
        var List = [10,12,15,30];
        var updatedList = List.map(function(list){ return list * 2  
        });
        console.log("original List" ,List)  //Original array not Modified
        console.log("Updated List" , updatedList) //Returns new array
  
        //filter
        var List = [10,12,15,30];
        var updatedList = List.filter(function(list){ return list %  2 == 0  }); 
        console.log("original List" ,List)  //Original array not Modified
        console.log("Updated List" , updatedList) //Returns new array
  
        `,
        answer: `<h3>forEach </h3>forEach() receives function as an argument and it applies the same code on every element. It will not 
          return anything , it just applies the conditions on every element. It will not change the original array.
          <h3>map</h3>map() receives function as parameter and similar as forEach , map will apply the code on each element and 
          returns an entirely new array. It will not change the original array.
          <h3>Filter</h3> filter() receives function as parameter. It runs the function for each element in the array. It will return the 
          new array which satisfies the condition applied. It will not change the original array.
          <h3>Difference</h3>
          <li>Difference between map() and forEach() is it's returning value. map() will return a <b>new array</b> as per the conditions applied 
          whereas forEach() will not return anything. forEach() returns <b>undefined</b>.</li>
          <li>If you have requirement to modify the current array and expecting modified one, then you should go with map(). If you just
          want to iterate the array , then you can use forEach(). </li>
          <li>As forEach() returns undefined , you can not attach another functions like filter() with it. You can easily apply filter() 
          with map(). </li><br/>
          `,
      },
      {
        qText: "Javascript global variables  ",
        image: "",
        lang: "Javascript",
        code: `
        var global = 10 ;
        function add()
        {
          var first = 10 ;
          var sum= first + global ;
          console.log(sum)     //20
        }
        add();
        `,
        answer: `Global variables in javascript are declared outside of the function or they can be declared with window object. They are accessible
          throughout the program.<br/>
          If you are dealing with large code, it is always better to use minimum global variables as they can create ambiguous behavior due to
          same varible names.  
          `,
      },
      {
        qText: "Rest Parameters",
        image: "",
        lang: "Javascript",
        code: ``,
        answer: `Rest parameter is one of the feature of ES6. Rest can be corelated with 'remaining all' for easier understanding. 
        Rest collects all the remaining elements and club them into an array. Let's understand more by the below example.
        In javascript, we can call function with any number of parameters irrespective of the number of parameters it is accepting as per its function declaration.
      `,
      },
      // {
      //   qText: "Difference between Java Array and JavaScript Array? ",
      //   image: "",
      //   lang: "Javascript",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "Global scope ",
      //   image: "",
      //   lang: "Javascript",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "Strict Mode in JavaScript ",
      //   image: "",
      //   lang: "Javascript",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      {
        qText: "what is variable hoisting in javascript ?  ",
        image: "",
        lang: "Javascript",
        code: `
        //variable tns is used before declaration
        tns = 10
        console.log(tns) //10
        var tns;
  
        //With Initialization
        console.log(tns)   //undefined
        var tns = 10;
        //output is undefined because initializations
        //are not hoisted.
        `,
        answer: `<p><b>Hoisting</b> in javascript allows us to use variables before they are declared. This is because in javascript all the 
          declarations are moved to the top of the scope. For Example- If you are using variables inside any function, during compilation
          phase javascript engine move them to the top of the function.  </p>
          <p>One thing to note is that only declarations are hoisted and not the initializations. </p>
          <p>For variables and constants we use var, let and const. var keyword is initialized to undefined by default. Due to which we can 
          declare var first and then later initialize it but this is not the case with let and const. If let and const are not initialized
          with any value they throw an error. As said earlier only declarations are hoisted and hence let and const does not allow hoisting.
          </p>
          `,
      },
      {
        qText: "What is block scope and global scope in javascript? ",
        image: "",
        lang: "Javascript",
        code: ``,
        answer: `<p><b>Block scope</b> is applied to variables which are declared inside any block surrouned by {}.</p>
           <p><b>Global scope</b> will be applied to variable which are declared outside any block or function.</p>
           Mostly intension to ask this question is to check about scopes of let ,var and const. 
           <p><b>Var</b> is global scoped if declared outside function and if declared inside function it will be function scoped.</p>
           <p><b>Let</b> and <b>const</b> are block scoped that is inside {}. </p>
          `,
      },
      {
        qText: "Difference between let, const and var? ",
        image: "",
        lang: "Javascript",
        code: `
        var userName = "TnS_User"
        userName = "TnS_User1"
        console.log(userName)    //TnS_User1
        var userName = "TnS_User_redeclaration"
        console.log(userName)  //TnS_User_redeclaration
  
        let userName = "TnS_User"
        userName = "TnS_User1"
        console.log(userName)    //TnS_User1
        let userName = "TnS_User_redeclaration"
        console.log(userName) //Uncaught SyntaxError: Identifier 'userName' has already been declared"
  
        const userName = "TnS_User"
        userName = "TnS_User1"
        console.log(userName)    //Uncaught TypeError: Assignment to constant variable."
        const userName = "TnS_User_redeclaration"
        console.log(userName) //Uncaught SyntaxError: Identifier 'userName' has already been declared"
        `,
        answer: `<li><b>ECMA version : </b><br/>Var is introduced in ES5. Let and const are introduced in ES6</li>
          <li><b>Scope :</b><br/>Var is global scoped if declared outside function.It will be functional scoped if declared within function.
          <br/>
          Let and const are block scoped that is inside {}
          </li>
          <li><b>Hoisting :</b><br/> Var variables are hoisted to the top of their scope.<br/>
          Let and const variables can be hoisted but we will not be able to access them because they need to be initialized to some value.
          In javascript only declarations are hoisted and not initializations hence we can not use hoisting for let and const.</li>
          <li><b>Modification and re-declaration : </b> <br/>Var variables can be directly updated and re-declared.<br/>
          Let variables can be updated but not re-declared.
          const can not be updated and re-declared.
          </li>
          <li>variables declared with const are not constant/fixed. They can be mutated. eg : const num ; num++<br/>
          we can not directly update but can mutate.
          </li>
          `,
      },
      {
        qText:
          "What is arrow function? What is difference between arrow function and normal function? ",
        image: "",
        lang: "Javascript",
        code: `
        //Normal function
        TnS = function(userName , age) {
          return "TnS user name is " + userName + " aged " + age +" years";
        }
        console.log(TnS("ABC" , 25)) //"TnS user name is ABC aged 25 years"
        
        //Arrow Function
        TnS = (userName , age) => "TnS user name is " + userName + " aged " + age +" years";
        console.log(TnS("ABC" , 25)) //"TnS user name is ABC aged 25 years"
        `,
        answer: `Arrow function let us use simpler syntax for function declarations. <br/>
          As compared to normal functions , 
          <li>Arrow functions are easy to write.</li>
          <li><b>this</b> keyword is not associated with arrow functions.</li>
          `,
      },
      {
        qText: "ES6 features ",
        image: "",
        lang: "Javascript",
        code: ``,
        answer: `ES6 top features are as : 
          <li>Promises</li> <li>Arrow Functions</li> <li>let keyword</li> <li>const keyword</li> <li>Multi line strings</li> 
          <li>rest and spread (...)</li>  
          `,
      },
      // {
      //   qText: "What are closures?",
      //   image: "",
      //   lang: "Javascript",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "What is callback functions? Why do we need callback functions?",
      //   image: "",
      //   lang: "Javascript",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "What is spread operator?",
      //   image: "",
      //   lang: "Javascript",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "Type of errors",
      //   image: "",
      //   lang: "Javascript",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "Method chaining",
      //   image: "",
      //   lang: "Javascript",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "Event bubbling and event capturing",
      //   image: "",
      //   lang: "Javascript",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "Destructuring process",
      //   image: "",
      //   lang: "Javascript",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "Javascript Prototype",
      //   image: "",
      //   lang: "Javascript",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      {
        qText: "What is DOCTYPE in HTML ?  ",
        image: "",
        lang: "HTML",
        code: ``,
        answer: `DOCTYPE is document type declaration. It tells browser that page is written in HTML and the version of HTML used.
          <!DOCTYPE html> is the syntax for HTML5. <br/>
          Every HTML page must start with DOCTYPE. If DOCTYPE is not specified, web browser will not get the HTML version and it 
          will enter into quirks mode.<br/>
          `,
      },
      {
        qText:
          "What is difference between <!DOCTYPE html> and <!Doctype html> ? which syntax is valid ?",
        image: "",
        lang: "HTML",
        code: ``,
        answer: `Both the syntax are valid and their is no difference between them because doctype declaration is case insensitive.`,
      },
      {
        qText: "What are singleton tags in HTML ? ",
        image: "",
        lang: "HTML",
        code: `      <br> tag 
        <hr> tag`,
        answer: `Singleton tags are the one who does not require closing tags. br, hr tags are some of the examples of singleton tags. `,
      },
      {
        qText: "What are semantic elements in HTML ?",
        image: "",
        lang: "HTML",
        code: `      <p>
        <header>
        <footer>
        <table>
        `,
        answer: `<b>Semantic elements = meaningful elements.</b><br>
          They describes the information they are holding in meaningful way to both developer and web browser.<br>
          For example : p , footer tags are considered as semantic tags because they very clearly tell what they are used for
          and the type of content they are holding.  
          `,
      },
      {
        qText: "What is difference between div and span ?",
        image: "",
        lang: "HTML",
        code: ``,
        answer: `
          <table>
            <tr >
              <th style="border : 1px solid #dddddd">Div</th>
              <th style="border : 1px solid #dddddd">Span</th>
            </tr>
            <tr>
              <td style="border : 1px solid #dddddd">It is used to divide the web page into blocks.</td>
              <td style="border : 1px solid #dddddd">It is used to group elements without any side effect on web page.</td>
            </tr>
            <tr>
              <td style="border : 1px solid #dddddd">It is block level element.</td>
              <td style="border : 1px solid #dddddd">It is inline element.</td>
                </tr>
            <tr>
              <td style="border : 1px solid #dddddd">Developer can hold the section of webpage and apply styling by using div tag.</td>
              <td style="border : 1px solid #dddddd">It can be easily used to style any word/phrases inside paragraph.</td>      
            </tr>
        </table>
          `,
      },
      {
        qText: "what is code for copyright symbol ? ",
        image: "",
        lang: "HTML",
        code: `     Use &copy; or &#169; in an HTML file for copyright symbol.`,
        answer: ``,
      },
      {
        qText: "what are HTML5 features ? ",
        image: "",
        lang: "HTML",
        code: ``,
        answer: `<h3>HTML5 Features :</h3> 
          <li>Header element</li> <li>Footer element</li> <li>Section element</li> <li>Audio and video plugins</li> <li>Local Data storage</li>
          <li>Email Inputs</li> <li>Figure element</li> <li>Canvas</li>
          `,
      },
      {
        qText: "What is difference between Localstorage and Sessionstorage ? ",
        image: "",
        lang: "HTML",
        code: ``,
        answer: `Local storage and session storage are almost same with only difference that session storage data will be deleted automatically 
          after the window/tab is closed. <br>Localstorage data will not be cleared on tab/window close, it will be deleted only when user 
          delete it or web application clears the data.<br>
          With local/session storage we can store much more data than cookies. Also are more secure than cookies.
          `,
      },
      {
        qText: "Can we use multiple body tags in HTML page? ",
        image: "",
        lang: "HTML",
        code: ``,
        answer: `We can not use multiple body tags in a single HTML document. If we have multiple pairs of body tags in a HTML document then it will 
          be considered as invalid html. Most of the time it will not give error until user is adding some scripts or CSS in it.`,
      },
      {
        qText: "What are list elements in HTML ? ",
        image: "",
        lang: "HTML",
        code: ``,
        answer: `<h3>HTML list elements :</h3> <li>List item : &ltli> defines list item. </li><li>Ordered List : &ltol> defines an ordered list.</li> 
          <li>Unordered List : &ltul> defines unordered list.</li>
          <li>Description List : &ltdl> defines description list.</li> `,
      },
      {
        qText: "What is vh unit in css? ",
        image: "",
        lang: "CSS",
        code: ``,
        answer: `vh stands for viewport height. It measure height in percentage with respect to viewport. For full page height it will be 100vh.
          vh is commonly used when we want to set background color for whole page.`,
      },
      // {
      //   qText: "What is article tag used for ? ",
      //   image: "",
      //   lang: "HTML",
      //   code: ``,
      //   answer: `-`,
      // },
      {
        qText: "What is difference between inline element and block element ? ",
        image: "",
        lang: "CSS",
        code: ``,
        answer: `<li>Span is example of inline element and div is example of block level element.</li>
           <li>Inline elements mainly used inside some parent element like &ltp> which is block level element to apply styling on 
           that particular line/phrase.Inline elements starts effecting from same line. <br/>
           Block level elements are used to divide webpage in blocks and apply styling/perform operations on them. They skip the line where 
           they are defined and starts effecting from new line.
          
          `,
      },
      {
        qText: "What is box model in CSS ? ",
        image: "",
        lang: "CSS",
        code: `      //Inspect TnS_box class,You can clearly check how box model is using below properties     
        TnS_box{
          padding : 15px;
          border : 20px solid black;
          margin : 25px;
          color : red;
          font-size : 20px;
        }
        
        `,
        answer: `As the name suggests box, you can say CSS box model is a box that wraps around every HTML element which includes content 
          ,padding,border,margin. Content is the innermost part which contains the actual content of web page. Then comes padding which is
          surrounded by border. Margin is the outermost part which clears the area outside of border. `,
      },
      {
        qText:
          "What is difference between em,rem and pixel ? When pixel unit should not be used ? ",
        image: "",
        lang: "CSS",
        code: ``,
        answer: `<li><b>pixel(px)</b> is considered as absolute unit. <b>Rem</b> and <b>em</b> are considered as relative units.</li>
          <li>Pixel unit is fixed and is not resized with respect to othet elements.</li> <li>Root element (<b>rem</b>) is relative to root element.</li> 
          <li>Element (<b>Em</b>) is relative to its parent element.</li> <li>Using pixel unit while dealing with responsive web pages can result into
          bad user experience because pixels do not resize them with respect to other elements. On the other hand they are very useful if we want 
          to keep some elemets of same size on every platform. For eg : The font size of paragraph.</li>`,
      },
      {
        qText: "What are different position properties ? ",
        image: "",
        lang: "CSS",
        code: ``,
        answer: `CSS position properties are as follows : <br/><br/> <li><b>Static : </b> When position is static then element is not affected by 
        left,right,top,bottom properties. By default all elements are static.</li> 
        <li><b>Relative : </b> When relative position is applied to element, it will be affected by left,right,top and bottom properties.</li> 
        <li><b>Absolute : </b> When element position is absolute, it will be positioned relative to its parent element.</li> 
        <li><b>Fixed : </b>When element is positioned as fixed, it will not be affted by scrolling. It will remain fixed at its position. <br/>Eg : App header.</li> 
        <li><b>Sticky : </b>When element is postioned as sticky, it will show combined properties of relative and fixed positions.<br/> Eg : 
        If we have multiple app headers and sticky position is applied on header2, header2 will behave as relative until scroll of
        header1 is over and then it will behave as fixed and will not move from its position.</li>`,
      },
      {
        qText:
          "What is difference between visibility :hidden and display :none ? ",
        image: "",
        lang: "CSS",
        code: ``,
        answer: `<b>Visibility : hidden</b> means we are asking to make that element invisible on the web page but point to note here is that 
          element is just hidden but it takes its space/dimensions on the webpage. <br/>
          <b>Display : none</b> means we are not at all displaying that element on webpage and hence in this case it will not take space
          on webpage and other elements are adjusted accordingly.<br/><br/>
          Example : Suppose you have three buttons <b>Login,Logout and Profile</b> on your webpage. When visibility : hidden is applied on Login button,
          it will be hidden but it will still occupy its space on screen and other buttons are not adjusted. <br>
          When display : none is applied on Login button, it will be removed from page and now Logout will be adjusted at the place of Login button
          and Profile button will shift to Logout buttons position.
          `,
      },
      {
        qText: "What is specificity in CSS ? What is the order of preference ? ",
        image: "",
        lang: "CSS",
        code: ``,
        answer: `Specificity is used by web browser to decide which CSS property should be applied to the given element. Specificity comes 
        into picture when same element is targeted by multiple CSS class declarations. <br/><br/>
        Inline CSS styling is having higher preference compared to ID which is followed by className. 
        `,
      },
      {
        qText: "Different ways of integrating CSS in webpage ? ",
        image: "",
        lang: "CSS",
        code: `      //Internal CSS
        <head>
        <style>
        p { font-size : 30px; }
        </style>
        </head>
  
        <p style="font-size : 30px">This is Inline CSS.</p> //Inline CSS
        `,
        answer: `There are three ways to integrate CSS in webpage 
          <li>Internal : Internal CSS will be applied for the single webpage. It is defined at the top inside &lthead> section of page. </li> 
          <li> External : External CSS file is created and applied globally to all pages. We need to configure the path for external CSS file
          inside &ltlink> element. </li> 
          <li> Inline : Inline CSS is applied to single block/element in webpage.</li>
          `,
      },
      {
        qText:
          "Code -- margin : 10px 20px 30px 40px ,what is value of margin-top ?   ",
        image: "",
        lang: "CSS",
        code: ``,
        answer: `For margin and padding properties, you can remeber it as -- Margin takes values in clockwise direction for the element starting
        from Top side. It will be Top -- Right -- Bottom -- Left. <br/>In the code given margin-top will be 10px. `,
      },
      {
        qText:
          "What is default behavior of collapse expansion? How to change it ?  ",
        image: "",
        lang: "CSS",
        code: `      display: flex;      
        flex-direction: column-reverse;`,
        answer: `Collapse default behavior to expand is from top to bottom. For better understanding you can relate it with behavior of Accordion.
        We can easily change this behavior. If we specify flex-direction as column-reverse , collapse will expand in upward direction that 
        is from bottom to top.  `,
      },
      {
        qText: "What is difference between margin and padding ? ",
        image: "",
        lang: "CSS",
        code: ``,
        answer: `As per the CSS box model, Padding is the empty space between actual page content and the border. Margin is area outside of
        border. In other words we can say padding is inside and margin is outside with respect to the border applied to the element.`,
      },
      // {
      //   qText: "useEffect Hook ?",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "What is profiling in ReactJS?",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
      // {
      //   qText: "Strict mode in ReactJS?",
      //   image: "",
      //   lang: "React",
      //   code: ``,
      //   answer:
      //     "-",
      // },
    ],
    darkMode: false,
    langName: "React",
    isDialogOpen: false,
    dialogQnA: [
      {
        isDialogQnAOpen: false,
        data: [{}],
      },
    ],
    mcqs: [
      {
        question: "React uses real Dom ?",
        code : "",
        langName : "React",
        answers: [
          { Option: "True", isCorrect: false },
          { Option: "False", isCorrect: true },
        ],
        correct: "False",
      },
      {
        question: "Which of the following is not react lifecycle method ?",
        code : "",
        langName : "React",
        answers: [
          { Option: "static getDerivedStateFromProps()", isCorrect: false },
          { Option: "shouldComponentUpdate()", isCorrect: false },
          { Option: "getSnapshotBeforeUpdate()", isCorrect: false },
          { Option: "gethandleChange()", isCorrect: true },
        ],
        correct: "gethandleChange()",
      },
      {
        question: "Which lifecycle method pure components use internally ?",
        code : "",
        langName : "React",
        answers: [
          { Option: "shouldComponentUpdate()", isCorrect: true },
          { Option: "getSnapshotBeforeUpdate()", isCorrect: false },
          { Option: "static getDerivedStateFromProps()", isCorrect: false },
          { Option: "componentDidMount()", isCorrect: false },
        ],
        correct: "shouldComponentUpdate()",
      },
      {
        question: "React Hooks are introduced in which react version ?",
        code : "",
        langName : "React",
        answers: [
          { Option: "16.2", isCorrect: false },
          { Option: "16.4", isCorrect: false },
          { Option: "16.6", isCorrect: false },
          { Option: "16.8", isCorrect: true },
        ],
        correct: "16.8",
      },
      {
        question: "State and other react features can be used without writing class with the help of hooks.",
        code : "",
        langName : "React",
        answers: [
          { Option: "False", isCorrect: false },
          { Option: "True", isCorrect: true },
        ],
        correct: "True",
      },
      {
        question: "What is return value of useState hook ?",
        code : "",
        langName : "React",
        answers: [
          { Option: "Current State", isCorrect: false },
          { Option: "Function updating current state", isCorrect: false },
          { Option: "Pair of current state and function updating it", isCorrect: true },
          { Option: "UseState returns nothing", isCorrect: false },
        ],
        correct: "Pair of current state and function updating it",
      },
      {
        question: "Which statement is more suitable for below code snippet ?",
        code : `
        useEffect(() => {
         //Code logic 
        }, [TnS_user]);`,
        langName : "React",
        answers: [
          { Option: "Effect runs only when mounting", isCorrect: false },
          { Option: "Effect re-runs if TnS_user value is true", isCorrect: false },
          { Option: "Effect re-runs if and only if value of TnS_user variable changes", isCorrect: true },
          { Option: "All of above", isCorrect: false },
        ],
        correct: "Effect re-runs if and only if value of TnS_user variable changes",
      },
      {
        question: "Which of the following is not grid breakpoint ?",
        code : "",
        langName : "React",
        answers: [
          { Option: "xs", isCorrect: false },
          { Option: "sm", isCorrect: false },
          { Option: "md", isCorrect: false },
          { Option: "xd", isCorrect: true },
        ],
        correct: "xd",
      },
      {
        question: "Javascript is single threaded language.",
        code : "",
        langName : "Javascript",
        answers: [
          { Option: "False", isCorrect: false },
          { Option: "True", isCorrect: true },
        ],
        correct: "True",
      },
      {
        question: "Javascript uses ....?",
        code : "",
        langName : "Javascript",
        answers: [
          { Option: "literal scoping", isCorrect: false },
          { Option: "lexical scoping", isCorrect: true },
          { Option: "Functional scoping", isCorrect: false },
          { Option: "sequential scoping", isCorrect: false },
        ],
        correct: "lexical scoping",
      },
      {
        question: "What will be output of following code ? ",
        code : `
        
        console.log("50" + 50 - 50)`,
        langName : "Javascript",
        answers: [
          { Option: "5000", isCorrect: true },
          { Option: "50", isCorrect: false },
          { Option: "500", isCorrect: false },
          { Option: "505050", isCorrect: false },
        ],
        correct: "5000",
      },
      {
        question: "What will be output of following ? ",
        code : `
        function TnS_outer(){
          var a = 10 ;
          function TnS_inner(){
            var b= 10 ;
            return a + b ;
          }
         return TnS_inner();
        }
        console.log(TnS_outer());`,
        langName : "Javascript",
        answers: [
          { Option: "10", isCorrect: false },
          { Option: "20", isCorrect: true },
          { Option: "undefined", isCorrect: false },
          { Option: "Error", isCorrect: false },
        ],
        correct: "20",
      },
      {
        question: "Which of the following statements is correct ? ",
        code : ``,
        langName : "Javascript",
        answers: [
          { Option: "splice() changes original array , slice() dosen't.", isCorrect: true },
          { Option: "slice() changes original array , splice() dosen't.", isCorrect: false },
          { Option: "slice() and splice() both change original array.", isCorrect: false },
          { Option: "slice() and splice() both dosen't change original array.", isCorrect: false },
        ],
        correct: "splice() changes original array , slice() dosen't.",
      },
      {
        question: "What will be output of following two codes? ",
        code : `
        function TnS_add(a,b)
        {
          return a + b;
        }
        function TnS_spreadadd(...nums){
          var count = 0 ;
          for(let num of nums)
          {
          count += num ;
          }
          return count ;
        }
        
        console.log(TnS_add(10,20,40) , TnS_spreadadd(10,20,40))
        `,
        langName : "Javascript",
        answers: [
          { Option: "Error", isCorrect: false },
          { Option: "30,70", isCorrect: true },
          { Option: "undefined , 70", isCorrect: false },
          { Option: "30,30", isCorrect: false },
        ],
        correct: "30,70",
      },
      {
        question: "What will be order of execution ? ",
        code : `
        console.log("A")
        setTimeout(function(){ console.log("B") }, 0);
        console.log("C")
        setTimeout(function(){ console.log("D") }, 1000);
        `,
        langName : "Javascript",
        answers: [
          { Option: "A B C D", isCorrect: false },
          { Option: "A C B D", isCorrect: true },
          { Option: "B D A C", isCorrect: false },
          { Option: "D B A C", isCorrect: false },
        ],
        correct: "A C B D",
      },
      {
        question: "Which of the following is not semantic element ?",
        code : ``,
        langName : "HTML",
        answers: [
          { Option: "<article>", isCorrect: false },
          { Option: "<div>", isCorrect: true },
          { Option: "<footer>", isCorrect: false },
          { Option: "<table>", isCorrect: false },
        ],
        correct: "<div>",
      },
      {
        question: "Which of the following is not list element ?",
        code : ``,
        langName : "HTML",
        answers: [
          { Option: "<ol>", isCorrect: false },
          { Option: "<ul>", isCorrect: false },
          { Option: "<dl>", isCorrect: false },
          { Option: "<hl>", isCorrect: true },
        ],
        correct: "<hl>",
      },
      {
        question: "Which of the following syntax is correct ?",
        code : ``,
        langName : "HTML",
        answers: [
          { Option: "<!DOCTYPE html>", isCorrect: false },
          { Option: "<!DocType html>", isCorrect: false },
          { Option: "<!doctype html>", isCorrect: false },
          { Option: "All of above", isCorrect: true },
        ],
        correct: "All of above",
      },
      {
        question: "Which of the following is correct syntax for hyperlink ?",
        code : ``,
        langName : "HTML",
        answers: [ 
          { Option: `<a url = "TnSLearnings.com"> TnSLearnings.com /a>`, isCorrect: false },
          { Option: `<a to = "TnSLearnings.com"> TnSLearnings.com </a>`, isCorrect: false },
          { Option: `<a href = "TnSLearnings.com"> TnSLearnings.com </a>`, isCorrect: true },
          { Option: `<a direct = "TnSLearnings.com"> TnSLearnings.com </a>`, isCorrect: false },
        ],
        correct: `<a href = "TnSLearnings.com"> TnSLearnings.com </a>`,
      },
      {
        question: "Which of the following attribute is used for inserting inline styling ?",
        code : ``,
        langName : "HTML",
        answers: [ 
          { Option: `className`, isCorrect: false },
          { Option: `style`, isCorrect: true },
          { Option: `inline`, isCorrect: false },
          { Option: `None of above`, isCorrect: false },
        ],
        correct: `style`,
      },
      {
        question: "Which of the following is not singleton tag ?",
        code : ``,
        langName : "HTML",
        answers: [ 
          { Option: `<br>`, isCorrect: false },
          { Option: `<hr>`, isCorrect: false },
          { Option: `<input>`, isCorrect: false },
          { Option: `<table>`, isCorrect: true },
        ],
        correct: `<table>`,
      },
      {
        question: "What does DOM stand for ?",
        code : ``,
        langName : "HTML",
        answers: [ 
          { Option: `Described Object Model`, isCorrect: false },
          { Option: `Document Object Model`, isCorrect: true },
          { Option: `Default Object Model`, isCorrect: false },
          { Option: `None of above`, isCorrect: false },
        ],
        correct: `Document Object Model`,
      },
      {
        question: "Which of the following is part of CSS box model ?",
        code : ``,
        langName : "CSS",
        answers: [ 
          { Option: `Margin`, isCorrect: false },
          { Option: `Border`, isCorrect: false },
          { Option: `Padding`, isCorrect: false },
          { Option: `All of above`, isCorrect: true },
        ],
        correct: `All of above`,
      },
      {
        question: "Which of the following is correct ?",
        code : ``,
        langName : "CSS",
        answers: [ 
          { Option: `Rem is relative to root element. Em is relative to its parent element.`, isCorrect: true },
          { Option: `Rem is relative to parent element. Em is relative to its root element.`, isCorrect: false },
          { Option: `Rem and Em are relative to its parent element.`, isCorrect: false },
          { Option: `Rem and Em are relative to its root element.`, isCorrect: false },
        ],
        correct: `Rem is relative to root element. Em is relative to its parent element.`,
      },
      {
        question: "What is the default position for any HTML element ?",
        code : ``,
        langName : "CSS",
        answers: [ 
          { Option: `Absolute`, isCorrect: false },
          { Option: `Static`, isCorrect: true },
          { Option: `Relative`, isCorrect: false },
          { Option: `Fixed`, isCorrect: false },
        ],
        correct: `Static`,
      },
      {
        question: "What is value of margin-top and margin-right for following ?",
        code : `
        margin : 15px 20px 25px 30px ;
        `,
        langName : "CSS",
        answers: [ 
          { Option: `15px 20px`, isCorrect: true },
          { Option: `20px 25px`, isCorrect: false },
          { Option: `25px 30px`, isCorrect: false },
          { Option: `15px 30px`, isCorrect: false },
        ],
        correct: `15px 20px`,
      },
      {
        question: "Which of the following is correct order of specificity ?",
        code : ``,
        langName : "CSS",
        answers: [ 
          { Option: `Id > Inline CSS > className`, isCorrect: false },
          { Option: `Inline CSS > Id > className`, isCorrect: true },
          { Option: `className > Id > Inline CSS`, isCorrect: false },
          { Option: `Inline CSS > className > Id`, isCorrect: false },
        ],
        correct: `Inline CSS > Id > className`,
      },
      {
        question: "Which of the following css is correct if we want to convert cursor/arrow to hand pointer onhover?",
        code : ``,
        langName : "CSS",
        answers: [ 
          { Option: `cursor: "arrow"`, isCorrect: false },
          { Option: `cursor: "cursor"`, isCorrect: false },
          { Option: `cursor: "default"`, isCorrect: false },
          { Option: `cursor: "pointer"`, isCorrect: true },
        ],
        correct: `cursor: "pointer"`,
      },
      {
        question: "Which statement is correct for below CSS?",
        code : `
        textDecoration : "none"
        `,
        langName : "CSS",
        answers: [ 
          { Option: `It will remove the font-size property.`, isCorrect: false },
          { Option: `It will remove the underline.`, isCorrect: true },
          { Option: `It will remove the text alignments.`, isCorrect: false },
          { Option: `All of above.`, isCorrect: false },
        ],
        correct: `It will remove the underline.`,
      },
      {
        question: "In React component names should always start with capital letter because react treats components starting with lowercase letters as DOM tags.",
        code : ``,
        langName : "React",
        answers: [ 
          { Option: `True`, isCorrect: true },
          { Option: `False`, isCorrect: false },
        ],
        correct: `True`,
      },
      {
        question: "What will be output on console ?",
        code : `
        for(var i=0 ;i<5;i++)
        {
          setTimeout(function(){ console.log(i) }, i);
        }
        `,
        langName : "Javascript",
        answers: [ 
          { Option: `0 1 2 3 4 `, isCorrect: false },
          { Option: `0 0 0 0 0 `, isCorrect: false },
          { Option: `5 5 5 5 5 `, isCorrect: true },
          { Option: `0 5 5 5 5 `, isCorrect: false },
        ],
        correct: `5 5 5 5 5 `,
      },
      {
        question: "What will be the output ?",
        code : `
        for(let i=0 ;i<5;i++)
        {
          setTimeout(function(){ console.log(i) }, i);
        }
        `,
        langName : "Javascript",
        answers: [ 
          { Option: `0 1 2 3 4 `, isCorrect: true },
          { Option: `0 0 0 0 0 `, isCorrect: false },
          { Option: `5 5 5 5 5 `, isCorrect: false },
          { Option: `0 5 5 5 5 `, isCorrect: false },
        ],
        correct: `0 1 2 3 4 `,
      },
      {
        question: "What will be output of TnS_Traingle?",
        code : `
        function TnS_Traingle()
        {
          var height = 10 ;
          let base = 20 ;
          
          var height = 20;
          let base = 30;
          
          return 0.5*base*height ;
        }
        `,
        langName : "Javascript",
        answers: [ 
          { Option: `100`, isCorrect: false },
          { Option: `SyntaxError: Identifier 'height' has already been declared`, isCorrect: false },
          { Option: `300`, isCorrect: false },
          { Option: `SyntaxError: Identifier 'base' has already been declared`, isCorrect: true },
        ],
        correct: `SyntaxError: Identifier 'base' has already been declared`,
      },
      {
        question: "What will be return value of TnS_Rectangle?",
        code : `
        function TnS_Rectangle()
        {
          var height = 10 ;
          let base = 20 ;
          
          if(height  > 5)
          {
            let base = 10 ;
          }
          
          return base*height ;
        }
        `,
        langName : "Javascript",
        answers: [ 
          { Option: `200`, isCorrect: true },
          { Option: `100`, isCorrect: false },
          { Option: `Infinite loop`, isCorrect: false },
          { Option: `SyntaxError: Identifier 'base' has already been declared`, isCorrect: false },
        ],
        correct: `200`,
      },
      {
        question: "Which of the following is true about React.lazy ?",
        code : ``,
        langName : "React",
        answers: [ 
          { Option: `It helps in dynamic rendering of large data.`, isCorrect: false },
          { Option: `It is used for handling asynchronous functions.`, isCorrect: false },
          { Option: `It renders dynamic import as regular component.`, isCorrect: true },
          { Option: `It restricts component from re-rendering.`, isCorrect: false },
        ],
        correct: `It renders dynamic import as regular component.`,
      },
      {
        question: "Which of the following method is used to render fallback UI in React error boundries ?",
        code : ``,
        langName : "React",
        answers: [ 
          { Option: `static getDerivedStateFromProps()`, isCorrect: false },
          { Option: `static getDerivedStateFromError()`, isCorrect: true },
          { Option: `componentWillCatch()`, isCorrect: false },
          { Option: `shouldComponentCatch()`, isCorrect: false },
        ],
        correct: `static getDerivedStateFromError()`,
      },
      {
        question: "Error boundaries do not catch errors for ",
        code : ``,
        langName : "React",
        answers: [ 
          { Option: `setTimeout()`, isCorrect: false },
          { Option: `Event handlers`, isCorrect: false },
          { Option: `Server side rendering`, isCorrect: false },
          { Option: `All of above`, isCorrect: true },
        ],
        correct: `All of above`,
      },
      {
        question: "Which tag render heading with highest font size ?  ",
        code : ``,
        langName : "HTML",
        answers: [ 
          { Option: `<h1>`, isCorrect: true },
          { Option: `<h2>`, isCorrect: false },
          { Option: `<h3>`, isCorrect: false },
          { Option: `<h4>`, isCorrect: false },
        ],
        correct: `<h1>`,
      },
    ],
    mcqList: [],
    queCount : 0,
  };
  
  function rootReducer(state = initialState, action) {
    if (action.type === ADD_Question) {
      return Object.assign({}, state, {
        question: [...state.question, action.payload],
      });
    }
    if (action.type === ADD_darkMode) {
      return Object.assign({}, state, {
        darkMode: action.payload,
      });
    }
    if (action.type === SET_LangName) {
      return Object.assign({}, state, {
        langName: action.payload,
      });
    }
    if (action.type === SET_DialogOpen) {
      return Object.assign({}, state, {
        isDialogOpen: action.payload,
      });
    }
    if (action.type === SET_DialogQnAOpen) {
      return Object.assign({}, state, {
        dialogQnA: action.payload,
      });
    }
    if (action.type === ADD_mcqList) {
      return Object.assign({}, state, {
        mcqList: [...state.mcqList, action.payload],
      });
    }
    if (action.type === SET_queCount) {
      return Object.assign({}, state, {
        queCount: action.payload,
      });
    }
  
    return state;
  }
  
  export default rootReducer;
  