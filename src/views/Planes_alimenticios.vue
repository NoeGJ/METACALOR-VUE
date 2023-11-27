<template>
    <v-card class="mx-auto mt-10" max-width="600">    
                <v-toolbar class="px-2">
                  <v-text-field
                    v-model="busqueda"
                    clearable
                    density="comfortable"
                    hide-details
                    placeholder="Buscar plan"
                    prepend-inner-icon="mdi-magnify"
                    class="mr-5 my-2"
                    variant="solo"
                
                  ></v-text-field>
                 <!-- boton de mas + -->
                 
                 <router-link to="/planes/add"><v-btn prepend-icon="mdi-plus" color="#ff5733" ></v-btn></router-link>
                </v-toolbar>
    
                <v-table>
                    <thead>
                        <tr>
                            <th class="text-left">
                              Añadir
                            </th>
                          <th class="text-left">
                            Nombre
                          </th>
                          <th class="text-left">
                            
                          </th>
                        </tr>
                      </thead>
                      <tbody>

                        <tr
                          v-for="(item, i) in planes"
                          :key="item.title"
                        >
                        <td><v-checkbox></v-checkbox></td>
                          <td>{{ item.title }}</td>
                          
                          <td >                            
   
                            <router-link :to="'/planes/' + i"><v-btn>Editar</v-btn></router-link>
    
                        </td>
                        
                        </tr>
                      </tbody>
                </v-table>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    
                </v-card-actions>
    </v-card>
</template>


<style scoped>

a { text-decoration: none; color: inherit; }
</style>

<script>
    import VDialogPlanes from '@/components/VDialogPlanes'
    export default {
        components: {
            VDialogPlanes
        },
        data: () => ({
            busqueda: '',
            planes: [
            {
                title: 'Plan nutriologo',
                description: 'Es hecho por mi nutriologo',
            },
            {
                title: 'Plan 1',
                description: 'Plan nuevo nutriologo',
            },
            {
                title: 'Plan 2',
                description: 'Plan para ejercicio',
            }],
        })
    }
</script>