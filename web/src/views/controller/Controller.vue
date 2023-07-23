<template>
   <v-container class="grey lighten-1" style="width: 100%;  max-width: 1899px;">
        <v-row> 
            <v-col
              cols="3" class="grey"
            >
        <v-row no-gutters style="width: 650px;">
            <v-col class="text-center" md="2"> 
                <v-btn
                  class="float-left"
                  key="zoom-top-left"
                  elevation="1"  
                  outlined
                  color="primary"
                  :height="btnZoomSize"
                  :width="btnZoomSize"
                >
                  <v-icon>mdi-arrow-top-left</v-icon>
                </v-btn>
            </v-col>

            <v-col class="text-center ml-n1" md="2"> 
                <v-btn
                  class="float-left"
                  key="zoom-top-mid"
                  elevation="2"  
                  outlined
                  color="primary"
                  :height="btnZoomSize"
                  :width="btnZoomSize"
                >
                  <v-icon>mdi-arrow-up</v-icon>
                </v-btn>
            </v-col>
            

            <v-col class="text-center" md="2"> 
                <v-btn
                  class="float-left ml-n1"
                  key="zoom-top-right"
                  elevation="2"  
                  outlined
                  color="primary"
                  :height="btnZoomSize"
                  :width="btnZoomSize"
                >
                  <v-icon>mdi-arrow-top-right</v-icon>
                </v-btn>
            </v-col>
            <v-col class="text-center" md="2"> 
                <v-btn
                  class="float-left ml-3"
                  key="zoom-in"
                  elevation="2"  
                  outlined
                  color="primary"
                  :height="btnZoomSize"
                  :width="btnZoomSize"
                >
                  <span>ZOOM IN</span>
                </v-btn>
            </v-col>
        </v-row>
        <v-row no-gutters style="width: 650px;">
            <v-col class="text-center mt-1" md="2"> 
                <v-btn
                  class="float-left"
                  key="zoom-left"
                  elevation="2"  
                  outlined
                  color="primary"
                  :height="btnZoomSize"
                  :width="btnZoomSize"
                >
                  <v-icon>mdi-arrow-left</v-icon>
                </v-btn>
            </v-col>
            <v-col class="text-center mt-1 ml-n1" md="2"> 
                <v-btn
                  class="float-left"
                  key="zoom-center"
                  elevation="3"  
                  outlined
                  color="primary"
                  :height="btnZoomSize"
                  :width="btnZoomSize"
                >
                  <v-icon>mdi-circle-outline</v-icon>
                </v-btn>
            </v-col>
            <v-col class="text-center mt-1 ml-n1" md="2"> 
                <v-btn
                  class="float-left"
                  key="zoom-right"
                  elevation="3"  
                  outlined
                  color="primary"
                  :height="btnZoomSize"
                  :width="btnZoomSize"
                >
                  <v-icon>mdi-arrow-right</v-icon>
                </v-btn>
            </v-col>
            <v-col class="text-center mt-1 ml-1" md="2"> 
                <v-btn
                  class="float-left ml-3"
                  key="zoom-out"
                  elevation="3"  
                  outlined
                  color="primary"
                  :height="btnZoomSize"
                  :width="btnZoomSize"
                >
                  <span>ZOOM OUT</span>
                </v-btn>
            </v-col>
        </v-row>
        <v-row no-gutters style="width: 650px;">
            <v-col class="text-center" md="2"> 
                <v-btn
                  class="float-left mt-1"
                  key="zoom-bottom-left"
                  elevation="3"  
                  outlined
                  color="primary"
                  :height="btnZoomSize"
                  :width="btnZoomSize"
                >
                  <v-icon>mdi-arrow-bottom-left</v-icon>
                </v-btn>
            </v-col>
            <v-col class="text-center" md="2"> 
                <v-btn
                  class="float-left mt-1 ml-n1"
                  key="zoom-down"
                  elevation="5"  
                  outlined
                  color="primary"
                  :height="btnZoomSize"
                  :width="btnZoomSize"
                >
                  <v-icon>mdi-arrow-down</v-icon>
                </v-btn>
            </v-col>
            <v-col class="text-center" md="2"> 
                <v-btn
                  class="float-left mt-1 ml-n2"
                  key="zoom-bottom-right"
                  elevation="5"  
                  outlined
                  color="primary"
                  :height="btnZoomSize"
                  :width="btnZoomSize"
                >
                  <v-icon>mdi-arrow-bottom-right</v-icon>
                </v-btn>
            </v-col>
        </v-row>
            </v-col>

            <v-col
              cols="2" class="blue float-right"
            >
            </v-col>

            <v-col
              cols="5" class="yelow float-right"
            >
            </v-col>

            <v-col
              cols="2" class="green float-right"
            >
            </v-col>
        </v-row>
      </v-container>
</template>

<script>
  export default {
    data () {
      return {
        settings: [],
        btnZoomSize:100,
      }
    },
  }
</script>
