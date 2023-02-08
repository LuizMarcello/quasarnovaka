<template>
  <div
    class="q-pa-md q-gutter-sm"
    style="display: flex; justify-content: center; text-align: center"
  >
    <q-btn
      to="/listarestoque"
      label="Listar todo estoque"
      exact
      style="background: #0d084f; color: white; width: 41%"
    >
      <q-icon name="mdi-human-male-female" />
    </q-btn>
  </div>

  <div style="margin-left: 30%; margin-right: 30%; text-align: center">
    <q-card class="my-card text-white" style="background: green">
      <div class="flex-container">
        <div style="margin-left: 4%">
          <q-card-section>
            <div class="text-h6">Antena</div>
          </q-card-section>

          <q-card-section>
            <q-btn to="/listarestoque" label="Listar antenas" exact>
              <!-- <q-icon name="mdi-human-male-female" /> -->
            </q-btn>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ ativosTotal }}</div>
          </q-card-section>
        </div>

        <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section>
        </div> -->
      </div>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: green">
      <div class="flex-container">
        <div style="margin-left: 4%">
          <q-card-section>
            <div class="text-h6">
              Buc
              <!-- <i class="fa-solid fa-user"></i> -->
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ ativosAtivos }}</div>
          </q-card-section>
        </div>

        <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section>
        </div> -->
      </div>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: green">
      <div class="flex-container">
        <div style="margin-left: 3%">
          <q-card-section>
            <div class="text-h6">
              Modem
              <!-- <i class="fa-solid fa-user"></i> -->
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ ativosInativos }}</div>
          </q-card-section>
        </div>
        <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section>
        </div> -->
      </div>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: green">
      <div class="flex-container">
        <div>
          <q-card-section>
            <div class="text-h6">
              Etria
              <!-- <i class="fa-solid fa-user"></i> -->
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ ativosAguardando }}</div>
          </q-card-section>
        </div>
        <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section>
        </div> -->
      </div>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: green">
      <div class="flex-container">
        <div>
          <q-card-section>
            <div class="text-h6">
              Fonte
              <!-- <i class="fa-solid fa-user"></i> -->
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ ativosAguardando }}</div>
          </q-card-section>
        </div>
        <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section>
        </div> -->
      </div>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: green">
      <div class="flex-container">
        <div>
          <q-card-section>
            <div class="text-h6">
              Groove
              <!-- <i class="fa-solid fa-user"></i> -->
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ ativosAguardando }}</div>
          </q-card-section>
        </div>
        <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section>
        </div> -->
      </div>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: green">
      <div class="flex-container">
        <div>
          <q-card-section>
            <div class="text-h6">
              Ilb
              <!-- <i class="fa-solid fa-user"></i> -->
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ ativosAguardando }}</div>
          </q-card-section>
        </div>
        <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section>
        </div> -->
      </div>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: green">
      <div class="flex-container">
        <div>
          <q-card-section>
            <div class="text-h6">
              Lnb
              <!-- <i class="fa-solid fa-user"></i> -->
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ ativosAguardando }}</div>
          </q-card-section>
        </div>
        <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section>
        </div> -->
      </div>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: green">
      <div class="flex-container">
        <div>
          <q-card-section>
            <div class="text-h6">
              Radio
              <!-- <i class="fa-solid fa-user"></i> -->
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ ativosAguardando }}</div>
          </q-card-section>
        </div>
        <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section>
        </div> -->
      </div>
    </q-card>

    <br />

    <q-card class="my-card text-white" style="background: green">
      <div class="flex-container">
        <div>
          <q-card-section>
            <div class="text-h6">
              Roteador
              <!-- <i class="fa-solid fa-user"></i> -->
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <div class="text-h5">{{ ativosAguardando }}</div>
          </q-card-section>
        </div>
        <!-- <div class="col">
          <q-card-section>
            <q-card-media
              ><q-img src="~assets/clientes050223.jpg"></q-img
            ></q-card-media>
          </q-card-section>
        </div> -->
      </div>
    </q-card>
  </div>

  <q-page-container>
    <router-view />
  </q-page-container>
</template>
