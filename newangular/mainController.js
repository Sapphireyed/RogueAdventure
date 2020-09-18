app.controller('DemoController',function($scope){
    $scope.IsVisible = false;

    $scope.toggle = function(){
      if ($scope.IsVisible == false) {
        $scope.IsVisible = true;
      } else {
        $scope.IsVisible = false;
      }
    }
    $scope.classes =[
      {
        name: "Warrior",
        ability:"Every time you play a combat card gain 1 Shield.",
        upgrade: "blah",
        icon: "https://rogueadventu.re/wp-content/uploads/2020/03/choose_warrior.png",
        likes: 0,
        comments: {
          content: '',
          name: ""
        }
      },
      {
        name: "Assassin",
        ability:"Every time you play a combat card gain 1 Shield.",
        upgrade: "blah",
        icon: "https://rogueadventu.re/wp-content/uploads/2020/03/choose_assassin.png",
        likes: 0,
        comments: {
          content: '',
          name: ""
        }
      },
      {
        name: "Paladin",
        ability:"Every time you play a combat card gain 1 Shield.",
        upgrade: "blah",
        icon: "https://rogueadventu.re/wp-content/uploads/2020/03/choose_paladin.png",
        likes: 0,
        comments: {
          content: '',
          name: ""
        }
      },
      {
        name: "Wizard",
        ability:"Every time you play a combat card gain 1 Shield.",
        upgrade: "blah",
        icon: "https://rogueadventu.re/wp-content/uploads/2020/03/choose_wizard.png",
        likes: 0,
        comments: {
          content: '',
          name: ""
        }
      },
      {
        name: "Necromancer",
        ability:"Every time you play a combat card gain 1 Shield.",
        upgrade: "blah",
        icon: "https://rogueadventu.re/wp-content/uploads/2020/03/choose_necromancer.png",
        likes: 0,
        comments: {
          content: '',
          name: ""
        }
      },
    ]
    $scope.addLike = function() {
      this.class.likes += 1;
    }
    $scope.addComment = function(){
      if (this.newName == undefined) {this.newName = ""}
      this.class.comments.content = '"' + this.newContent + '"'  + '\n'+ this.newName +'\n'  + "____________" + '\n\n' + this.class.comments.content + this.class.comments.name + '\n\n'
    }
    });
