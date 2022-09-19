<template>
    <div class="container-fluid h-100 text-center bg-maintenance">
        <div class="row h-100 d-flex justify-content-center align-items-center">
            <div class="col-10 col-md-8">
                <div class="row bg-card px-5 pt-5 pb-3">
                    <div class="col-md-2"></div>
                    <div class="col-md-8 d-flex justify-content-center align-items-center">
                        <b-img 
                            src="https://ik.imagekit.io/d3rdfRTergDURe/mitrapabrik-maintenance-under_45OdqNROBTr.webp?updatedAt=1635915810513" 
                            fluid center
                        ></b-img>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-12">
                        <h5 class="mitrapabrik subtitle">SOMETHING <span style="color: #02687f;">BIG</span> IS COMING</h5>
                    </div>
                        <b-img 
                        src="https://ik.imagekit.io/d3rdfRTergDURe/mitrapabrik-maintenance-logo_gBqLVMVoB.webp?updatedAt=1635915809643"
                        
                        class="logo"
                    ></b-img>
                </div>
            </div>
            <!-- <div class="col-12 d-flex justify-content-center align-items-center p-0">
                <b-img 
                    src="https://ik.imagekit.io/d3rdfRTergDURe/ezgif.com-gif-maker__2___HOrYEpBW04.webp" 
                    fluid-grow center
                ></b-img>
            </div> -->
        </div>
    </div>
</template>

<script>
    export default {
        layout:'maintenance',
    }
</script>

<style scoped>
    .bg-maintenance {
        background-image: url("https://ik.imagekit.io/d3rdfRTergDURe/mitrapabrik-maintenance-bg_rNsrHdvJJ.webp?updatedAt=1635915809197");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .bg-card {
        border-radius: 30px;
        background-color: white;
    }

    .logo {
        position: absolute;
        top: 5%;
        left: 3%;
        height: 10%;
    }

    @media (max-width: 575.98px) {
        .subtitle {
            font-size: 10px;
            color: #0ca7af;
        }
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
        .subtitle {
            font-size: 15px;
            color: #0ca7af;
        }
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
        .subtitle {
            font-size: 20px;
            color: #0ca7af;
        }
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
        .subtitle {
            font-size: 30px;
            color: #0ca7af;
        }
    }

    @media (min-width: 1200px) {
        .subtitle {
            font-size: 40px;
            color: #0ca7af;
        }
    }
</style>