import * as THREE from 'three';

export class Scene {
    
    setUp(e) {
  
      this.e=e;
  
    }
  
    buildScene(){

      this.mainCont = new THREE.Group();
      this.e.scene3D.add(this.mainCont)

      this.dl_shad = new THREE.DirectionalLight(0xffffff, .75);
      this.dl_shad.position.x=12*3;
      this.dl_shad.position.z=-26*3;
      this.dl_shad.position.y=26*3;
      this.mainCont.add(this.dl_shad);

      this.dl_shad.castShadow=true;

      this.dl_shad.shadow.mapSize.width = 4096;
      this.dl_shad.shadow.mapSize.height = 4096;
      // this.dl_shad.shadow.bias = .001;
      
      this.e.sSize = 20;
      this.dl_shad.shadow.camera.near = 0.1; 
      this.dl_shad.shadow.camera.far = 180;
      this.dl_shad.shadow.camera.left = -this.e.sSize;
      this.dl_shad.shadow.camera.right = this.e.sSize;
      this.dl_shad.shadow.camera.top = this.e.sSize;
      this.dl_shad.shadow.camera.bottom = -this.e.sSize;
      this.dl_shad.shadow.radius = 2;

      // const shadowHelper = new THREE.CameraHelper(this.dl_shad.shadow.camera);
      // this.mainCont.add(shadowHelper);

      // ambient light

      this.ambLight = new THREE.AmbientLight( 0xffffff, .75 );
      this.mainCont.add( this.ambLight );

      //---PLAYER------------------------------------------------------------------------------------------------------

      this.playerCont = new THREE.Group();
      this.mainCont.add(this.playerCont)
      this.playerCont.position.y=0;
      this.playerCont.position.z=0;
      this.playerCont.position.x=0;

      //---SCENE------------------------------------------------------------------------------------------------------

      var geometry = new THREE.BoxGeometry();
      var material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
      this.box = new THREE.Mesh(geometry, material);
      this.box.castShadow=true;
      this.box.receiveShadow=true;
      this.box.position.y=.5;
      this.mainCont.add(this.box);

      geometry = new THREE.PlaneGeometry(5,5);
      material = new THREE.MeshStandardMaterial({ color: 0x333333 });
      this.floor = new THREE.Mesh(geometry, material);
      this.floor.rotation.x = this.e.u.ca(-90);
      this.floor.castShadow=true;
      this.floor.receiveShadow=true;
      this.mainCont.add(this.floor);

    }

    update(){
        
      this.mixer()

    }

    mixer(){

      if(document.getElementById("mix").checked === true){
  
          //-------------------------------------
  
          var c1_H = document.getElementById("c1_H").value;
          var c1_S = document.getElementById("c1_S").value;
          var c1_L = document.getElementById("c1_L").value;
  
          document.getElementById("c1_Color").value = this.e.u.hslToHex(c1_H,c1_S,c1_L);
          // this.rig.material.color.setHex( "0x"+this.e.u.hslToHex(c1_H,c1_S,c1_L) );
  
          //-------------------------------------
  
          var c2_H = document.getElementById("c2_H").value;
          var c2_S = document.getElementById("c2_S").value;
          var c2_L = document.getElementById("c2_L").value;
  
          document.getElementById("c2_Color").value = this.e.u.hslToHex(c2_H,c2_S,c2_L);
          // this.roofBars.material.color.setHex( "0x"+this.e.u.hslToHex(c2_H,c2_S,c2_L) );
          
          //-------------------------------------
  
          var c3_H = document.getElementById("c3_H").value;
          var c3_S = document.getElementById("c3_S").value;
          var c3_L = document.getElementById("c3_L").value;
  
          document.getElementById("c3_Color").value = this.e.u.hslToHex(c3_H,c3_S,c3_L);
          // this.roofEdge.material.color.setHex( "0x"+this.e.u.hslToHex(c3_H,c3_S,c3_L) );
          
          //-------------------------------------
  
          var c4_H = document.getElementById("c4_H").value;
          var c4_S = document.getElementById("c4_S").value;
          var c4_L = document.getElementById("c4_L").value;
  
          document.getElementById("c4_Color").value = this.e.u.hslToHex(c4_H,c4_S,c4_L);
          // this.ambLight.color.setHex( "0x"+this.e.u.hslToHex(c4_H,c4_S,c4_L) );
  
          //-------------------------------------
  
          var c5_H = document.getElementById("c5_H").value;
          var c5_S = document.getElementById("c5_S").value;
          var c5_L = document.getElementById("c5_L").value;
  
          document.getElementById("c5_Color").value = this.e.u.hslToHex(c5_H,c5_S,c5_L);
  
          //-------------------------------------
  
          var num1 = document.getElementById("num1").value;
          var num2 = document.getElementById("num2").value;
          var num3 = document.getElementById("num3").value;
  
          // this.dl_shad.position.x = num1;
          // this.dl_shad.position.z = num2;
          // this.dl_shad.position.y = num3;
  
      }

    }

}