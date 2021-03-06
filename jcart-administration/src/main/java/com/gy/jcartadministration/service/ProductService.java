package com.gy.jcartadministration.service;

import com.github.pagehelper.Page;
import com.gy.jcartadministration.dto.in.product.ProductCreateInDTO;
import com.gy.jcartadministration.dto.in.product.ProductUpdateInDTO;
import com.gy.jcartadministration.dto.out.product.ProductListOutDTO;
import com.gy.jcartadministration.dto.out.product.ProductShowOutDTO;

import java.util.List;

public interface ProductService {

    Integer create(ProductCreateInDTO productCreateInDTO);

    void update(ProductUpdateInDTO productUpdateInDTO);

    void delete(Integer productId);

    void batchDelete(List<Integer> productIds);

    Page<ProductListOutDTO> search(Integer pageNum);

    ProductShowOutDTO getById(Integer productId);

}
