var e = new uc.Unicorn(uc.ARCH_ARM64, uc.MODE_ARM);
var a = new ks.Keystone(ks.ARCH_ARM64, ks.MODE_LITTLE_ENDIAN);
var d = new cs.Capstone(cs.ARCH_ARM64, cs.MODE_ARM);

// Instruction Pointer
function pcRead() {
    return e.reg_read_i32(uc.ARM64_REG_PC);
}
function pcWrite(value) {
    return e.reg_write_i32(uc.ARM64_REG_PC, value);
}

// Customization
$('title').html('Unicorn.js: ARM64');
$('.navbar-demo').html('ARM64');

// Registers
paneRegisters.add(new Register('x0',     'i32', uc.ARM64_REG_X0));
paneRegisters.add(new Register('x1',     'i32', uc.ARM64_REG_X1));
paneRegisters.add(new Register('x2',     'i32', uc.ARM64_REG_X2));
paneRegisters.add(new Register('x3',     'i32', uc.ARM64_REG_X3));
paneRegisters.add(new Register('x4',     'i32', uc.ARM64_REG_X4));
paneRegisters.add(new Register('x5',     'i32', uc.ARM64_REG_X5));
paneRegisters.add(new Register('x6',     'i32', uc.ARM64_REG_X6));
paneRegisters.add(new Register('x7',     'i32', uc.ARM64_REG_X7));
paneRegisters.add(new Register('x8',     'i32', uc.ARM64_REG_X8));
paneRegisters.add(new Register('x9',     'i32', uc.ARM64_REG_X9));
paneRegisters.add(new Register('x10',    'i32', uc.ARM64_REG_X10));
paneRegisters.add(new Register('x11',    'i32', uc.ARM64_REG_X11));
paneRegisters.add(new Register('x12',    'i32', uc.ARM64_REG_X12));
paneRegisters.add(new Register('x13',    'i32', uc.ARM64_REG_X13));
paneRegisters.add(new Register('x14',    'i32', uc.ARM64_REG_X14));
paneRegisters.add(new Register('x15',    'i32', uc.ARM64_REG_X15));
paneRegisters.add(new Register('x16',    'i32', uc.ARM64_REG_X16));
paneRegisters.add(new Register('x17',    'i32', uc.ARM64_REG_X17));
paneRegisters.add(new Register('x18',    'i32', uc.ARM64_REG_X18));
paneRegisters.add(new Register('x19',    'i32', uc.ARM64_REG_X19));
paneRegisters.add(new Register('x20',    'i32', uc.ARM64_REG_X20));
paneRegisters.add(new Register('x21',    'i32', uc.ARM64_REG_X21));
paneRegisters.add(new Register('x22',    'i32', uc.ARM64_REG_X22));
paneRegisters.add(new Register('x23',    'i32', uc.ARM64_REG_X23));
paneRegisters.add(new Register('x24',    'i32', uc.ARM64_REG_X24));
paneRegisters.add(new Register('x25',    'i32', uc.ARM64_REG_X25));
paneRegisters.add(new Register('x26',    'i32', uc.ARM64_REG_X26));
paneRegisters.add(new Register('x27',    'i32', uc.ARM64_REG_X27));
paneRegisters.add(new Register('x28',    'i32', uc.ARM64_REG_X28));
paneRegisters.add(new Register('x29',    'i32', uc.ARM64_REG_X29));
paneRegisters.add(new Register('SP',     'i32', uc.ARM64_REG_SP));
paneRegisters.add(new Register('LR:x30', 'i32', uc.ARM64_REG_X30));
paneRegisters.add(new Register('PC',     'i32', uc.ARM64_REG_PC));
paneRegisters.update();

// Initialization
paneAssembler.setAddr(0x10000);
paneAssembler.appendAsm(`
    mov  x0, #0x37
    mov  x2, #0x33
    mov  x3, #0x11
    sub  x1, x2, x3
`);
paneMemory.update();
