export function formatarCpf(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove os caracteres não numéricos
    cpf = cpf.padStart(11, '0'); // Completa com zeros à esquerda, se necessário

    return cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9);
}