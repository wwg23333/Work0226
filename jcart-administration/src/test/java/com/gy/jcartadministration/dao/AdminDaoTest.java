package com.gy.jcartadministration.dao;

import org.junit.jupiter.api.Test;
import org.mybatis.spring.boot.test.autoconfigure.MybatisTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;

import static org.junit.jupiter.api.Assertions.*;

@MybatisTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
public class AdminDaoTest {
    @Autowired
    private AdministratorMapper administratorMapper;

    @Test
    void selectByUsername() {
        String username = "admin";
        AdministratorMapper administrator = administratorMapper.selectByUsername(username);
        assertNotNull(administrator);
        username = "admin110";
        administrator = administratorMapper.selectByUsername(username);
        assertNull(administrator);
    }
}
