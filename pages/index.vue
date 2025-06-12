<template>
    <section class="pb-20 pt-36 md:pb-32 md:pt-48">
      <div class="grid place-items-center lg:max-w-screen-xl gap-8 mx-3 md:mx-auto">
        <div class="text-center space-y-8">
          <Badge variant="outline" class="text-sm py-1">
            <span class="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span> Design is out now! </span>
          </Badge>
 
          <div class="max-w-screen-md mx-auto text-center text-4xl md:text-7xl tracking-tighter font-bold">
            <h1>
              Experience the
              <span class="text-transparent px-2 bg-gradient-to-r from-primary bg-clip-text">
                StarterKitPro
              </span>
            </h1>
          </div>
 
          <p class="max-w-screen-md mx-auto text-xl text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
            doloremque mollitia fugiat omnis! Porro facilis quo animi
            consequatur. Explicabo.
          </p>
 
          <div class="space-y-4 md:space-y-0 md:space-x-4">
            <Button class="w-5/6 md:w-1/4 font-bold group/arrow">
              Get Started
              <ArrowRight class="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
            </Button>
 
            <Button
              asChild
              variant="secondary"
              class="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="#" target="_blank">
                Github respository
              </Link>
            </Button>
          </div>
        </div>
 
        <div class="relative group mt-14">
          <div class="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <img
            width={1200}
            height={1200}
            class="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary  border-t-primary/30"
            src="/data.jpg"
            alt="dashboard"
          />
        </div>
      </div>
    </section>
</template>

<script setup>
</script>
