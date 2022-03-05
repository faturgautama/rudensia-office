
export interface IInvoiceAirModel {
    id?: string;
    id_customer: string;
    nama_customer: string;
    no_kavling: string;
    no_pelanggan_customer: string;
    id_bulan_tagihan: number;
    tanggal_tagihan: any;
    jumlah_pemakaian_awal: number;
    jumlah_pemakaian_akhir: number;
    jumlah_iuran_sampah: number;
    subtotal: number;
    status: boolean;
    user_input: string;
    time_input: string;
    tunggakan?: any;
}