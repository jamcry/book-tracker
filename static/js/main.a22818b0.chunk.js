(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABvCAMAAACTrc34AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAANJQTFRF7u7u7Ozs1tbWwcHBurq65eXl6+vrt7e3oKCgpKSkqampqqqqpaWl4eHhwsLCvb295OTk6urq3d3d3Nzc6enpqKiotra24uLioaGhysrK5ubmv7+/yMjI0dHRvLy8xcXFx8fHoqKi0tLSrKysq6ur39/frq6u2dnZp6enra2tzMzMwMDAzc3N2NjY19fXr6+v4+Pjz8/PsbGxuLi4u7u7zs7O7+/vtbW16Ojo7e3ty8vLsLCwvr6+0NDQxMTEtLS0pqam1dXV09PT29vbw8PD1NTUWKkgTAAAAVhJREFUeJzt12tTgkAUgOHFW8cbiiaspBYucklR0eieVtb//0uRUEw64aY744fO82nn7M47wDDDQAhCCCGEENqLlMnmdsnzpQonUCyVU1WgyteSoVYv/EppNJtNmbN12lILKdsZWONrabQdr/Ts2bfO17bSDfU4W1U4j1cXYMQo7ScXpqoq426Zg/WiblpaxHas5La7LmMOdwvYpR0a0lE8akPNTnjj8ZC7VS5Gz3eiRBPJgi28rdHUh5nvV+bxRGKu/9MVdysgOq2R61LSutk4E2ALW9g6QqvvCWvdOkwS1LrrAb0X1GoYVtnJC2lJD8bAg0chrSdYELKktoCW22Lh56f+PHMObwG8fA4WAAe3GEQvq+TS+caZv7bIq6xFk5W8OrSVAlvYwtb/bk2NjrCWYk40HcS0woPWG8yCNDneFglMY/vnYK9/hZDuve+i8LYQQgghhI7jA51oXkY+WX4kAAAAAElFTkSuQmCC"},function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r);a(20),a(21);function c(){return o.a.createElement("div",{className:"Header"},o.a.createElement("div",{className:"brand"},o.a.createElement("img",{className:"brand-logo",src:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/microsoft/209/books_1f4da.png",alt:"stacked books emoji"}),"Book Tracker"),o.a.createElement("div",{className:"slogan"},"Manage your books with a online library"))}var s=a(2),i=a(3),u=a(5),d=a(4),h=a(1),m=a(6),b=a(13),p=a.n(b);var g=function(e){return o.a.createElement("div",{className:"book-cover"},o.a.createElement("img",{className:"book-cover-image",src:e.url||p.a,alt:"".concat(e.title,"'s book cover"),width:"75",height:"111"}))};var v=function(e){return o.a.createElement("div",{className:"book-details"},o.a.createElement("h3",null,e.title),o.a.createElement("h5",null,e.author),o.a.createElement("p",null,"Pages: ",e.pages))},k=a(11);a(22);var f=function(e){var t=(e.currentPages/e.totalPages*100).toFixed(1);return o.a.createElement("div",{className:"book-progress"},o.a.createElement(k.a,{value:t,text:"".concat(t,"%"),background:!0,backgroundPadding:6,styles:Object(k.b)({backgroundColor:"#3e98c7",textColor:"#fff",pathColor:"#fff",trailColor:"transparent"})}))},E=a(9),A=a(10),C=a(7),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={title:e.data.title,author:e.data.author,pages:e.data.pages,coverUrl:e.data.coverUrl,currentPages:e.data.currentPages},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.handleUpdate(Object(A.a)({},this.state)),document.querySelector(".popup-overlay").click()}},{key:"render",value:function(){return o.a.createElement("div",{className:"popup-form-wrapper"},o.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},o.a.createElement("h1",null,"Edit Book"),o.a.createElement("label",null,"Title",o.a.createElement("input",{type:"text",name:"title",onChange:this.handleChange,value:this.state.title,required:!0})),o.a.createElement("label",null,"Author",o.a.createElement("input",{type:"text",name:"author",onChange:this.handleChange,value:this.state.author})),o.a.createElement("label",null,"Pages",o.a.createElement("input",{type:"number",name:"pages",onChange:this.handleChange,value:this.state.pages})),o.a.createElement("label",null,"Current Pages",o.a.createElement("input",{type:"number",name:"currentPages",onChange:this.handleChange,value:this.state.currentPages})),o.a.createElement("button",{className:"btn"},"Update")))}}]),t}(o.a.Component);function N(e){return o.a.createElement("div",{className:"book-actions row"},o.a.createElement("div",{style:{flex:1}}),o.a.createElement("div",{style:{display:"flex",flex:3,padding:10}},o.a.createElement(E.a,{trigger:o.a.createElement("button",{className:"btn-inline btn-edit"},"Edit"),modal:!0},o.a.createElement("div",{className:"edit-popup-content"},o.a.createElement(y,{data:e.data,handleUpdate:e.handleUpdate}))),o.a.createElement("button",{className:"btn-inline btn-delete",onClick:e.handleDelete},"Delete")))}var O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={noStateYet:!0},a.handleDelete=a.handleDelete.bind(Object(h.a)(a)),a.handleUpdate=a.handleUpdate.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleDelete",value:function(){window.confirm('You are deleting the book "'.concat(this.props.data.title,'" from your library.'))&&this.props.actions.removeBook(this.props.data)}},{key:"handleUpdate",value:function(e){var t=this.props.data;this.props.actions.updateBook(t,e)}},{key:"render",value:function(){var e=this.props.data,t=e.title,a=e.author,n=e.pages,r=e.coverUrl,l=e.currentPages;return o.a.createElement("div",{className:"book-card col"},o.a.createElement("div",{className:"row"},o.a.createElement(g,{title:t,url:r}),o.a.createElement(v,{title:t,author:a,pages:n}),o.a.createElement(f,{totalPages:n,currentPages:l})),o.a.createElement("div",{className:"row"},o.a.createElement(N,{data:this.props.data,handleDelete:this.handleDelete,handleUpdate:this.handleUpdate})))}}]),t}(o.a.Component),j=(a(23),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={title:"",author:"",pages:0,coverUrl:"",currentPages:0},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(C.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addNewBook(Object(A.a)({},this.state)),e.target.reset(),document.querySelector(".popup-overlay").click()}},{key:"render",value:function(){return o.a.createElement("div",{className:"popup-form-wrapper"},o.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},o.a.createElement("h1",null,"New Book"),o.a.createElement("label",null,"Title",o.a.createElement("input",{type:"text",name:"title",onChange:this.handleChange,value:this.state.title,required:!0})),o.a.createElement("label",null,"Author",o.a.createElement("input",{type:"text",name:"author",onChange:this.handleChange,value:this.state.author})),o.a.createElement("label",null,"Pages",o.a.createElement("input",{type:"number",name:"pages",onChange:this.handleChange,value:this.state.pages})),o.a.createElement("label",null,"Current Pages",o.a.createElement("input",{type:"number",name:"currentPages",onChange:this.handleChange,value:this.state.currentPages})),o.a.createElement("button",{className:"btn"},"Add")))}}]),t}(o.a.Component)),w=[{title:"Hitchhiker's Guide to the Galaxy",author:"Douglas Noel Adams",pages:354,coverUrl:"https://i.pinimg.com/originals/d1/bd/fb/d1bdfb15e7a605301115ae4f8f294fdc.png",currentPages:170},{title:"Choke",author:"Chuck Palahniuk",pages:270,coverUrl:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1403186013l/29059.jpg",currentPages:0},{title:"The Myth of Sisyphus",author:"Albert Camus",pages:194,coverUrl:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383471186l/7349538.jpg",currentPages:194}],S=(a(24),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(d.a)(t).call(this))).addNewBook=e.addNewBook.bind(Object(h.a)(e)),e.removeBook=e.removeBook.bind(Object(h.a)(e)),e.updateBook=e.updateBook.bind(Object(h.a)(e)),e.state={bookData:null},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"updateLocalStorage",value:function(){localStorage.setItem("bookData",JSON.stringify(this.state.bookData))}},{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("bookData"));this.setState({bookData:e||w})}},{key:"addNewBook",value:function(e){this.setState(function(t){return{bookData:t.bookData.concat(e)}})}},{key:"removeBook",value:function(e){this.setState(function(t){return{bookData:t.bookData.filter(function(t){return t!==e})}})}},{key:"updateBook",value:function(e,t){this.setState(function(a){return{bookData:a.bookData.map(function(a){return a===e?t:a})}})}},{key:"render",value:function(){this.updateLocalStorage();var e={removeBook:this.removeBook,updateBook:this.updateBook},t=this.state.bookData.map(function(t){return o.a.createElement(O,{key:t.title,data:t,actions:e})});return o.a.createElement("div",{className:"book-list"},o.a.createElement(E.a,{trigger:o.a.createElement("button",{className:"btn"},"Add New Book"),modal:!0},o.a.createElement(j,{addNewBook:this.addNewBook})),t)}}]),t}(o.a.Component));var D=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c,null),o.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[14,1,2]]]);
//# sourceMappingURL=main.a22818b0.chunk.js.map