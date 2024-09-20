
async function deploy() {

  
    const Factory = await ethers.getContractFactory("OffchainResolverFactory");
    const factory = await Factory.deploy("0x71b5425a607E91C2e995911b00c52dAfAfb78708")
    await factory.waitForDeployment();
    console.log(factory.target)


}

deploy()
