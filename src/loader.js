import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export class Loader{

    setUp(e){

        this.e = e;

        this.ready=false;
        this.objectsLoaded=0;
        this.loaderArray=[];
        
        this.totalModels = 0;
        this.totalModelsLoaded = 0;

        this.isLoaded_CUBE=true;
        this.isLoaded_3DTEXTURES=false;
        this.isLoaded_3D=false;
        this.e.reflectionTexture=null;

    }

    loadCubeTexture(loader){
        
        console.log("CUBE TEXTURE");
        // this.isLoaded_CUBE=true;
    
    }
    
    loadTexture(loader){

        loader.objectsLoaded+=1;
        console.log("LOAD 3D TEXTURE: "+loader+" - "+this.objectsLoaded+" / "+this.loaderArray.length)

        if(this.objectsLoaded===this.loaderArray.length){
            this.isLoaded_3DTEXTURES=true;
        }
        
    }
    
   managerLoad(obName){
    
        this.objectsLoaded+=1;
        this.totalModelsLoaded+=1;

        console.log("MODEL: "+obName+" - "+this.objectsLoaded+" / "+this.loaderArray.length)

        if(this.objectsLoaded===this.loaderArray.length){
            this.isLoaded_3D=true;
        }

   }

   load(){

        var e = this.e;

        //------------------------------------------------------------------

        var loader = new THREE.CubeTextureLoader();
        loader.name="skyboxLoaderName";

        this.e.reflectionTexture = loader.load([
        './src/images/ref/pos-x.png',
        './src/images/ref/neg-x.png',
        './src/images/ref/pos-y.png',
        './src/images/ref/neg-y.png',
        './src/images/ref/pos-z.png',
        './src/images/ref/neg-z.png',
        ], this.loadCubeTexture);


        this.loaderArray.push("blackTemp"); this.e.blackTemp = new THREE.TextureLoader().load( './src/images/black.png', this.loadTexture(this));
        // this.e.blackTemp.anisotropy = this.e.renderer.capabilities.getMaxAnisotropy();

        // this.e.blackTemp.repeat.x = 260;
        // this.e.blackTemp.repeat.y = 260;
        // this.e.blackTemp.wrapS = this.e.blackTemp.wrapT = THREE.RepeatWrapping;

        //------------------------------------------------------------------

        console.log("BEGIN LOADER");

        this.myObject1 = "soccerBall"; this.loaderArray.push(this.myObject1);  this.totalModels+=1;
        this.manage = new THREE.LoadingManager(); this.manage.onLoad = () => { this.managerLoad(this.myObject1) };
        this.loader = new GLTFLoader(this.manage); this.loader.load('./src/models/'+this.myObject1+'.glb', gltf => {  
        
            gltf.scene.traverse( function( object ) {

                e.stadium=gltf.scene;

                if ( object.isMesh ){

                    object.castShadow=true;
                    object.receiveShadow=true;
                    object.material.side = THREE.FrontSide;

                }

            });

        }, this.loadSomething);

        //------------------------------------------------------------------

    }

}