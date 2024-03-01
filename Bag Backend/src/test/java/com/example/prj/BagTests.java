package com.example.prj.Controller;

import com.example.prj.entity.Item;
import com.example.prj.pojo.ItemPojo;
import com.example.prj.service.ItemService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

public class BagTests {

    private MockMvc mockMvc;

    @Mock
    private ItemService itemService;

    @InjectMocks
    private ItemController itemController;

    @BeforeEach
    public void setup() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(itemController).build();
    }

    @Test
    public void testSaveItem() throws Exception {
        String itemJson = "{\"name\": \"Test Item\", \"description\": \"Test Description\", \"price\": 10.0}";

        mockMvc.perform(post("/item/save")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(itemJson))
                .andExpect(status().isOk());

        verify(itemService, times(1)).saveItem(any());
    }

    @Test
    public void testFindAll() throws Exception {
        List<Item> items = Arrays.asList(new Item(), new Item());
        when(itemService.findAll()).thenReturn(items);

        mockMvc.perform(get("/item/getAll"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$[0]").exists())
                .andExpect(jsonPath("$[1]").exists());
    }

    @Test
    public void testFindById() throws Exception {
        Integer itemId = 1;
        Item item = new Item();
        when(itemService.findById(itemId)).thenReturn(Optional.of(item));

        mockMvc.perform(get("/item/getById/{id}", itemId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").exists());
    }

    @Test
    public void testDeleteById() throws Exception {
        Integer itemId = 1;

        mockMvc.perform(delete("/item/deleteById/{id}", itemId))
                .andExpect(status().isOk());

        verify(itemService, times(1)).deleteById(itemId);
    }

    @Test
    public void testSearchByName() throws Exception {
        String itemName = "Test";
        List<Item> items = Arrays.asList(new Item(), new Item());
        when(itemService.searchByName(itemName)).thenReturn(items);

        mockMvc.perform(get("/item/searchByName/{itemName}", itemName))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
                .andExpect(jsonPath("$[0]").exists())
                .andExpect(jsonPath("$[1]").exists());
    }
}
